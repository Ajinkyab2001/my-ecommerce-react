import React, { useContext, useReducer,createContext } from 'react'
import productsArr from '../Component/data';
import { cartReducer } from './Reducer';
import Cart from './CartContext';


const Context = ({children}) => {

   
    const[state,dispatch] = useReducer(cartReducer,{
        productsArr:productsArr,
        cart:[]
    })

  return (
    <Cart.Provider value={{state,dispatch}}>{children}</Cart.Provider>
  )
}


export default Context;

