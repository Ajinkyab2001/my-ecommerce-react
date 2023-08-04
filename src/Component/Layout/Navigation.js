import React, { useContext } from "react";
import "./Navigation.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Container, Navbar, Nav, Dropdown, Badge } from "react-bootstrap";
import Carts from "../../Context/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Button from "@mui/material/Button";
import AuthContext from "../../Context/AuthContext/AuthContext";

const Navigation = () => {
  const { state, dispatch } = useContext(Carts);
  const { isLoggedIn, logoutHandler } = useContext(AuthContext);
  return (
    

    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Amazon</Navbar.Brand>

        <Nav.Link as={Link}  to={isLoggedIn ? "/" :'/authentication'}>
          Home
        </Nav.Link>
        <Nav.Link as={Link}  to={isLoggedIn ? "/store" :'/authentication'}>
          Store
        </Nav.Link>
        <Nav.Link as={Link}   to={isLoggedIn ? "/about" :'/authentication'}>
          About
        </Nav.Link>
        <Nav.Link as={Link}   to={isLoggedIn ? "/contactus" :'/authentication'}>
          Contact
        </Nav.Link>
        <Dropdown alignRight>
          <Dropdown.Toggle variant="success">
            <ShoppingCartIcon />
            <Badge>{isLoggedIn && state.cart.length}</Badge>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {state.cart.length > 0 ? (
              <>
                {state.cart.map((prod) => (
                  <span className="cartitem" key={prod.id}>
                    <img
                      src={prod.imageUrl}
                      className="cartItemImg"
                      alt={prod.title}
                    />
                    <div className="cartItemDetail">
                      <span>{prod.title}</span>
                      <span>₹ {prod.price}</span>
                    </div>
                    <DeleteIcon
                      fontSize="20px"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: prod,
                        })
                      }
                    />
                  </span>
                ))}
                <Link   to={isLoggedIn ? "/cart" :'/authentication'} >
                  <Button style={{ width: "95%", margin: "0 10px" }}>
                    Go To Cart
                  </Button>
                </Link>
              </>
            ) : (
              <span style={{ padding: 10 }}>cart is empty</span>
            )}
          </Dropdown.Menu>
        </Dropdown>

        {/* <Nav.Link as={Link} to="/authentication">
        <Button variant="primary">

        </Button>
        </Nav.Link> */}
        {!isLoggedIn && (
            <Nav.Link
          
             
              to="/authentication"
            >
              Login
            </Nav.Link>
          )}

        {isLoggedIn && (
          <button
            className="m-3 authTab text-light text-decoration-none p-2 bg-danger fw-bold "
            onClick={logoutHandler}
          >
            Logout
          </button>
        )}
      
      </Container>
    </Navbar>
  );
};

export default Navigation;
