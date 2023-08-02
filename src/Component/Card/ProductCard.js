import React, { useContext } from "react";
import "./ProductCard.css";
import Carts from "../../Context/CartContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    state,
    dispatch,
  } = useContext(Carts);

  const singleProductStorageHandler =()=>{
    dispatch({ type: "ADD_SINGLE_PRODUCT", payload: product });
  }

  return (
    
    <div className="productCard__wrapper" >
    
      <div>
      <Link to={`/store/${product.id}/${product.title}`} >
        <img className="productCard__img" src={product.imageUrl} alt="img" onClick={singleProductStorageHandler} />
        <h4 onClick={singleProductStorageHandler}>{product.title}</h4>
        </Link>
        <div className="ProductCard__price">${product.price}</div>
      </div>
      {state.cart.some((p) => p.id === product.id) ? (
        <Button 
        variant="danger"
         onClick={() => {
            dispatch({ type: "REMOVE_FROM_CART", payload: product });
          }}>Remove from cart</Button>
      ) : (
        <Button
          variant="success"
          onClick={() => {
            dispatch({ type: "ADD_TO_CART", payload: product });
          }}
        >
          Add to cart
        </Button>
      )}
      {/* <div>
        <button>Add to Cart</button>
    </div> */}
    
    </div>
    
    
  );
  
};

export default ProductCard;
