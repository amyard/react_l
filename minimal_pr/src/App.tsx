import React, {createElement as e, useState} from 'react';
import logo from './logo.svg';
import {Product} from './components/Product';
import {products} from './data/products';

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

  // jsx syntax
  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {/* <Product 
        product={products[0]} 
        title="test1 syntax" 
        title2={'test2 syntax'} /> */}

    <Product product={products[0]} />
    <Product product={products[1]} />
    </div>
  );
}

export default App;
