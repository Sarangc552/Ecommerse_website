import React, { useContext } from "react";
import { productcontext } from "../../App";
import Rating from "@mui/material/Rating";
import "./view.css";
import { Link } from "react-router-dom";
import { IoWarning } from "react-icons/io5";
import { GiReturnArrow } from "react-icons/gi";
import { MdLocalShipping } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import Swal from "sweetalert2";

const Viewpage = () => {
  const { viewitem, cartitem, setcartitem } = useContext(productcontext);

  const movetocart = (e) => {
    const productincart = cartitem.some((item) => item.id === e.id);

    if (productincart) {
      Swal.fire({
        title: "Cart Item",
        text: "The item already in cart",
        icon: "error"
      });

    } else {
      setcartitem([...cartitem, { ...e, quantity: 1, totalPrice: e.price }]);
    }
  };
  return (
    <div className="container">
      <div className="row view-section">
        <div className="firstcontainer col-lg-6 col-md-6 col-sm-12 col-12">
          <div>
            {viewitem && viewitem.images && (
              <div className="imagecontainer">
                <img
                  src={viewitem?.images[0]}
                  alt=""
                  height={"550px"}
                  width={"500px"}
                />
              </div>
            )}
          </div>
        </div>
        <div className="secondcontainer col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="textcontainer">
            <h2>{viewitem.title}</h2>
            <Rating name="size-medium" defaultValue={viewitem.rating} />
            <h2>
              ${viewitem.price}{" "}
              <span style={{ fontSize: "20px", color: "green" }}>
                10% off !
              </span>
            </h2>
            <h4>{viewitem.description}</h4>
            <div className="containerlist">
              <div>
                <IoWarning className="warning-icon" />
                {viewitem.warrantyInformation}
              </div>
              <div>
                <MdLocalShipping className="ship-icon" />
                {viewitem.shippingInformation}
              </div>
              <div>
                <GiReturnArrow className="return-icon" />
                {viewitem.returnPolicy}
              </div>
              <div>
                <MdProductionQuantityLimits className="stock-icon" />
                Stock{viewitem.stock}
              </div>
            </div>
          </div>

          <div className="cartbtns">
            <button
              onClick={() => movetocart(viewitem)}
              style={{
                borderRadius: "12px",
                width: "180px",
                padding: "10px",
                color: "white",
                border: "0px",
                background: "green",
                marginBottom: "10px",
              }}
            >
              Add to cart
            </button>
            {/* <button
              className=""
              style={{
                borderRadius: "12px",
                width: "180px",
                padding: "10px",
                background: "blue",
                color: "white",
                border: "0px",
                marginLeft: "5px",
                marginBottom: "10px"
              }}
            >
              Buy Now
            </button> */}
            <button
              style={{
                borderRadius: "12px",
                width: "180px",
                padding: "10px",
                background: "red",
                color: "white",
                border: "0px",
                marginLeft: "5px",
                marginBottom: "10px",
              }}
            >
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                Cancel
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewpage;
