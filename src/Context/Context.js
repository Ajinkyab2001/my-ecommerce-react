import React, { useReducer, useEffect } from 'react';
import productsArr from '../Component/data';
import { cartReducer } from './Reducer';
import Carts from './CartContext';

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    productsArr: productsArr,
    cart: [],
    singleProduct: {},
  });

  useEffect(() => {
    const email = localStorage.getItem('email');

    if (email) {
      const userHalfEmail = email.replace('@', '');
      const userEmail = userHalfEmail.replace('.', '');
      
      // Fetch cart items from the API when user logs in
      fetch(`https://ecommerce-32b10-default-rtdb.firebaseio.com/${userEmail}.json`)
        .then((response) => response.json())
        .then((data) => {
          // Dispatch action to set cart items in state
          const loadedMovies = [];
        console.log(data)
      for (const key in data) {
        loadedMovies.push({
          key:key,
          id: data[key].id,
          title: data[key].title,
          price:data[key].price,
          imageUrl:data[key].imageUrl,
          description: data[key].description,
          
        });
      }

          dispatch({ type: 'SET_CART_ITEMS', payload: loadedMovies });
          console.log(loadedMovies)
        })
        .catch((error) => {
          console.error('Error fetching cart items:', error);
        });
    }
  }, []);

  return (
    <Carts.Provider value={{ state, dispatch }}>{children}</Carts.Provider>
  );
};

export default Context;
