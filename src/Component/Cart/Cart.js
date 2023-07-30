import React, { useContext, useEffect, useState } from "react";
import { Button, Col, ListGroup, Row, Form } from "react-bootstrap";
import Carts from "../../Context/CartContext";
import "./Cart.css";
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  const { state,dispatch } = useContext(Carts);

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      state.cart.reduce((acc, curr) => acc + Number(curr.price * curr.qty), 0)
    );
  }, [state.cart]);

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {state.cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col>
                  <img className="imgurl" src={prod.imageUrl} alt="imageurl" />
                </Col>
                <Col md={2}>
                  <span>{prod.title}</span>
                </Col>
                <Col md={2}>${prod.price}</Col>
                <Col>
                  <Form.Control
                    as="select"
                    className="my-1 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                    custom
                    onChange={(e)=>dispatch({
                      type:"CHANGE_CART_QTY",
                      payload:{
                        id:prod.id,
                        qty:e.target.value
                      }
                    })}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <DeleteIcon
                    variant="danger"
                    onClick={() => {
                      dispatch({ type: "REMOVE_FROM_CART", payload: prod });
                    }}
                  />
                  
                
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal({state.cart.length})items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total : $ {total}</span>
        <Button type="button" disabled={state.cart.length === 0}>
          Proceed to checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
