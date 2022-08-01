import {useEffect, useState} from 'react';
import axios, { AxiosError } from 'axios';
import { IProduct } from '../models';

export function useProducts() {
  // useState([]) - by default wwe don't have data after starting the app
  // [products, setProducts] - products - first position, setProducts - second action after running
  const [products, setProducts] = useState<IProduct[]>([]);

  // if start add - show loading, after getting data - remove loading
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');

  // add additional product after creating new product
  function addProduct(product: IProduct) {
    setProducts(prev => [...prev, product]);
  }

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

  return {products, error, loading, addProduct};
}