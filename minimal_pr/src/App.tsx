import React, {createElement as e, useEffect, useState} from 'react';
import {Product} from './components/Product';
// import {products} from './data/products';
import axios, { AxiosError } from 'axios';
import { IProduct } from './models';
import { useProducts } from './hooks/product';
import { Loader } from './components/Loader';
import { ErrorMessage } from './components/ErrorMessage';
import { Modal } from './components/Modal';
import { CreateProduct } from './components/CreateProduct';

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

  const {products, error, loading, addProduct} = useProducts();
  const [modal, setModal] = useState(false);

  // add addtional product after creating a new one
  const createHandler = (product: IProduct) => {
    setModal(false);
    addProduct(product);
  }
  
  // jsx syntax
  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}

      {products.map(product =><Product product={product} key={product.id} />)}
      
      {/* not use such syntax
      {products.map((product, index) =><Product product={product} key={index} />)} */}

      {modal && <Modal title="Create new product" onClose={() => setModal(false)}>
        <CreateProduct onCreate={createHandler} />
      </Modal>}

      <button className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
      onClick={() => setModal(true)}>+</button>
    </div>
  );
}

export default App;
