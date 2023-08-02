import React, { useContext } from 'react'
import Carts from '../../Context/CartContext'
import { Button, Col, ListGroup,Row } from "react-bootstrap";
import { Form } from 'react-bootstrap';
import './ProductDetail.css'

const ProductDetail = () => {
    const {state,dispatch} = useContext(Carts)
  return (
    <div className="position-absolute top-50 start-50 translate-middle ">
    <ListGroup>
    <ListGroup.Item className='item'>
    <Row>
        <Col className='imgdiv'>
            <img src={state.singleProduct.imageUrl} alt='productImage' />
        </Col>
        <Col className='infodiv'>
            <h2>{state.singleProduct.title}</h2>
            <h4>${state.singleProduct.price}</h4>
            <p>{state.singleProduct.description}</p>
            <div>
            <div className='selectbutton'>
            <Form.Control
                    as="select"
                    className=" formcontrol"
                    id="inlineFormCustomSelectPref"
                    custom
                    onChange={(e)=>dispatch({
                      type:"CHANGE_CART_QTY",
                      payload:{
                        id:state.singleProduct.id,
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
            </div>
            <div>
            {state.cart.some((p) => p.id === state.singleProduct.id) ? (
        <Button 
        variant="danger"
         onClick={() => {
            dispatch({ type: "REMOVE_FROM_CART", payload: state.singleProduct });
          }}>Remove from cart</Button>
      ) : (
        <Button
          variant="success"
          onClick={() => {
            dispatch({ type: "ADD_TO_CART", payload: state.singleProduct });
          }}
        >
          Add to cart
        </Button>
      )}
            </div>
            </div>
        </Col>
        </Row>
        </ListGroup.Item>
        </ListGroup>
    </div>
  )
}

export default ProductDetail