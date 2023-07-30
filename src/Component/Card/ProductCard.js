import React, { useContext } from "react";
import "./ProductCard.css";
import Carts from "../../Context/CartContext";
import { Button } from "react-bootstrap";

const ProductCard = ({ product }) => {
  const {
    state,
    dispatch,
  } = useContext(Carts);
  return (
    <div className="productCard__wrapper">
      <div>
        <img className="productCard__img" src={product.imageUrl} alt="img" />
        <h4>{product.title}</h4>
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
