import React from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoBoatSharp } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import "./shopwithus.css";

const Shopwithus = () => {
  return (
    <div>
      <div className="shop-withus text-center">
        <h1 className="header-shop">Why Shop With Us</h1>
        <div className="shop-container row m-5">
          <div className="delivery col-lg-4 col-md-4 col-sm-12 col-12">
            <MdOutlineLocalShipping className="delivery-icon" />
            <h3>Fast Delivery</h3>
            <p>variations of passages of Lorem Ipsum available</p>
          </div>
          <div className="free-shiping col-lg-4 col-md-4 col-sm-12 col-12">
            <IoBoatSharp
              className="ship-icon"
              style={{ fontSize: "50px", color: "white" }}
            />
            <h3>Free Shiping</h3>
            <p>variations of passages of Lorem Ipsum available</p>
          </div>
          <div className="quality col-lg-4 col-md-4 col-sm-12 col-12">
            <TiTick className="quality-icon" />
            <h3>Best Quality</h3>
            <p>variations of passages of Lorem Ipsum available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopwithus;
