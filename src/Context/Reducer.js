export const cartReducer = (state, action) => {
  const email = localStorage.getItem("email");
  const userHalfEmail = email.replace("@", "");
  const userEmail = userHalfEmail.replace(".", "");

  switch (action.type) {
    case "ADD_TO_CART":
      // Logic to add item to API

      const newCartItem = { ...action.payload, qty: 1 };

      fetch(
        `https://ecommerce-32b10-default-rtdb.firebaseio.com/${userEmail}.json`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([...state.cart, newCartItem]),
        }
      );

      return { ...state, cart: [...state.cart, newCartItem] };

    case "REMOVE_FROM_CART":
      // Logic to remove item from the cart and API
      const updatedCart = state.cart.filter((c) => c.id !== action.payload.id);
      console.log("inside remove");
      console.log(updatedCart);

      console.log(action.payload.key);
      fetch(
        `https://ecommerce-32b10-default-rtdb.firebaseio.com/${userEmail}.json`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedCart),
        }
      )
        .then(() => {
          console.log("Item removed successfully from API.");
        })
        .catch((error) => {
          console.error("Error removing item from API:", error);
        });

      return {
        ...state,
        cart: updatedCart,
      };
    case "CHANGE_CART_QTY":
      const updatedQuantity = state.cart.filter((c) =>
        c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
      );
      fetch(
        `https://ecommerce-32b10-default-rtdb.firebaseio.com/${userEmail}.json`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedQuantity),
        }
      );

      return {
        ...state,
        cart: updatedQuantity,
      };
    case "ADD_SINGLE_PRODUCT":
      return { ...state, singleProduct: { ...action.payload } };

    case "SET_CART_ITEMS":
      // console.log('outsideif')
      console.log(action.payload);
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};
