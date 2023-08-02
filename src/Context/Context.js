import React, {  useReducer} from 'react'
import productsArr from '../Component/data';
import { cartReducer } from './Reducer';
import Carts from './CartContext';


const Context = ({children}) => {

   
    const[state,dispatch] = useReducer(cartReducer,{
        productsArr:productsArr,
        cart:[],
        singleProduct:{}
    })

  return (
    <Carts.Provider value={{state,dispatch}}>{children}</Carts.Provider>
  )
}


export default Context;

