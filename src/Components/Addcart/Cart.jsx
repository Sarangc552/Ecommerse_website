import React, { useContext, useState } from "react";
import { productcontext } from "../../App";
import "./cart.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartitem, setcartitem } = useContext(productcontext);
  const [cartmodal, setcartmodal] = useState(true);
  console.log(cartitem);

  const handleClose = () => {
    setcartmodal(false);
  };

  const increasequantity = (id) => {
    setcartitem((prevcart) =>
      prevcart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: (item.quantity + 1) * item.price,
            }
          : item
      )
    );
  };

  const decreasequantity = (id) => {
    setcartitem((prevcart) =>
      prevcart.map((item) =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: (item.quantity - 1) * item.price,
            }
          : item
      )
    );
  };

  const removeitem = (id) => {
    setcartitem((prev) => prev.filter((item) => item.id !== id));
  };

  const totalAmount = cartitem.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <div>
      <h2 className="cart-head m-3">
        Your <span style={{ color: "#f7444e" }}>Cart Items</span>
      </h2>
      {cartitem.length === 0 ? (
        <Modal show={cartmodal} onHide={handleClose} className="modal-cart">
          <Modal.Header closeButton>
            <Modal.Title>Cart Items</Modal.Title>
          </Modal.Header>
          <Modal.Body>Your Cart is empty!!!</Modal.Body>
          <Modal.Footer>
            <Button variant="success">
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "white" }}
              >
                Continue Shopping
              </Link>
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <div className="container">
          <div className="row">
            {/* Left Section: Cart Items */}
            <div className="col-md-8">
              <div className="carts">
                {cartitem.map((item, index) => (
                  <div key={item.id} className="mb-4 cartdetails">
                    <div className="imagecontainer">
                      <img src={item.images[0]} alt="" height={"150px"} />
                    </div>
                    <div className="textcontainer">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <h4 style={{ marginBottom: "18px" }}>${item.price}</h4>
                      {/* Display quantity */}
                      <h6>Quantity: {item.quantity}</h6>
                      {/* Displaying the total price */}
                      <h6>Total Price: $ {item.totalPrice}</h6>
                    </div>
                    <div className="cart-btns">
                      <button
                        className="add-btn"
                        onClick={() => increasequantity(item.id)}
                      >
                        +
                      </button>

                      <button
                        className="sub-btn"
                        onClick={() => decreasequantity(item.id)}
                      >
                        -
                      </button>

                      <button
                        className="remo-btn"
                        onClick={() => removeitem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section: Total Amount */}
            <div className="col-md-4">
              <div className="cart-summary text-center">
                <h3 style={{fontFamily:"Open Sans sans-serif",fontWeight:"bold"}}>
                  Order Summary</h3>
                <hr />
                <h5>Total Amount: $ {totalAmount}</h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
