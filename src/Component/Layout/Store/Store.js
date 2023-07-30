import React, { useContext } from 'react';
import ProductCard from '../../Card/ProductCard';
import './Store.css';
import Carts from '../../../Context/CartContext';

const Store = () => {
  const {state} = useContext(Carts)
  console.log(state);

  return (
    <div className='products__wrapper'>
      
      {state.productsArr.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Store;
