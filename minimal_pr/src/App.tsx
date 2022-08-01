import React, {createElement as e, useEffect, useState} from 'react';
import {Product} from './components/Product';
// import {products} from './data/products';
import axios, { AxiosError } from 'axios';
import { IProduct } from './models';

function App() {
  //return e('h1', {}, 'Hello from JS');

  // old syntax
  // const [count, setCount] = useState(0);

  // return e("div", {className:"container"}, [
  //   e('h1', {className:'font-bold', key: 1}, `Test JSX ${count}`),
  //   e('button', {
  //     className:'py2 px-4 border', 
  //     key: 2,
  //     onClick: () => setCount(count+1)
  //   }, 'Click me.'),
  // ])

  // useState([]) - by default wwe don't have data after starting the app
  // [products, setProducts] - products - first position, setProducts - second action after running
  const [products, setProducts] = useState<IProduct[]>([]);

  // if start add - show loading, after getting data - remove loading
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');

  async function fetchProducts() {
    try {
      setError('');

      // change loading to true
      setLoading(true);
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');
      setProducts(response.data);

      // change loading to false
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  // если передила [] то он вызовется только один раз, когда реакт будет готов
  useEffect(() => {
    fetchProducts();
  }, []);

  // jsx syntax
  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <div className='text-center'>Loading...</div>}
      {error && <div className='text-center text-red-600'>{error}</div>}

      {products.map(product =><Product product={product} key={product.id} />)}
      
      {/* not use such syntax
      {products.map((product, index) =><Product product={product} key={index} />)} */}

      {/* <Product product={products[0]} />
      <Product product={products[1]} /> */}
    </div>
  );
}

export default App;
