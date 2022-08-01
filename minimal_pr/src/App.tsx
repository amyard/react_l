import React, {createElement as e, useEffect, useState} from 'react';
import {Product} from './components/Product';
// import {products} from './data/products';
import axios, { AxiosError } from 'axios';
import { IProduct } from './models';
import { useProducts } from './hooks/product';
import { Loader } from './components/Loader';
import { ErrorMessage } from './components/ErrorMessage';

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

  const {products, error, loading} = useProducts();
  
  // jsx syntax
  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}

      {products.map(product =><Product product={product} key={product.id} />)}
      
      {/* not use such syntax
      {products.map((product, index) =><Product product={product} key={index} />)} */}

      {/* <Product product={products[0]} />
      <Product product={products[1]} /> */}
    </div>
  );
}

export default App;
