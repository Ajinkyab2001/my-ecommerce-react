import React, { useContext } from "react";
import "./Navigation.css";
// import Home from './Home/Home'
// import ContactUs from './ContactUs/ContactUs'
// import About from './About/About'
// import Cart from '../Cart/Cart'
// import Store from '../Store/Store'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Container, Navbar, Nav, Dropdown, Badge } from "react-bootstrap";
import Carts from "../../Context/CartContext";
import DeleteIcon from '@mui/icons-material/Delete';
import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
    const {state,dispatch} = useContext(Carts)
  return (
    // <div className='header'>
    //      <span>Home</span>
    //      <span>Store</span>
    //      <span>About</span>
    //      <span>Contact</span>
    //      <div><ShoppingCartIcon /><span>0</span></div >

    // </div>

    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Amazon</Navbar.Brand>
       
          <Nav.Link >Home</Nav.Link>
          <Nav.Link ><Link to="/store">Store</Link></Nav.Link>
          <Nav.Link>About</Nav.Link>
          <Nav.Link >Contact</Nav.Link>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success" >
              <ShoppingCartIcon />
              <Badge>{state.cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu>
            {state.cart.length > 0 ?
            <>
             {state.cart.map((prod)=>(
               ( <span className="cartitem" key={prod.id}>
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
                    </span>)
             ))}
             <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>

            </>:( <span style={{ padding: 10 }}>cart is empty</span>)}
             
            </Dropdown.Menu>
          </Dropdown>
        
      </Container>
    </Navbar>
  );
};

export default Navigation;
