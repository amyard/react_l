import React, {createElement as e, useContext, useEffect, useState} from 'react';
import {Product} from '../components/Product';
// import {products} from './data/products';
import axios, { AxiosError } from 'axios';
import { IProduct } from '../models';
import { useProducts } from '../hooks/product';
import { Loader } from '../components/Loader';
import { ErrorMessage } from '../components/ErrorMessage';
import { Modal } from '../components/Modal';
import { CreateProduct } from '../components/CreateProduct';
import { ModalContext } from '../context/ModalContext';


export function ProductsPage(){
    const {products, error, loading, addProduct} = useProducts();
  //const [modal, setModal] = useState(false);
  const {modal, open, close: closeModal} = useContext(ModalContext);

  // add addtional product after creating a new one
  const createHandler = (product: IProduct) => {
    //setModal(false);
    closeModal();
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

      {modal && <Modal title="Create new product" onClose={closeModal}>
        <CreateProduct onCreate={createHandler} />
      </Modal>}

      <button className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
      onClick={open}>+</button>
    </div>
  );
}