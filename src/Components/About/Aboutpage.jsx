import React from "react";
import "./about.css";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlinePriceChange } from "react-icons/md";
import { FaToolbox } from "react-icons/fa";
import { HiReceiptRefund } from "react-icons/hi2";

const Aboutpage = () => {
  return (
    <div>
      <div className="row text-center">
        <div className="about-head col-12">
          <h4>We sale good products</h4>
          <h1>About Us</h1>
        </div>
      </div>

      <div>
        <div className="second-head container">
          <h2>
            Why <span style={{ color: "#F28123" }}>Shopcart</span>
          </h2>
          <div className="row">
            <div className="col-lg-6 col-md-6 mb-4 mb-md-5">
              <CiDeliveryTruck className="deliveryy" />
              <h5>Home Delivery</h5>
              <p>
                sit voluptatem accusantium dolore mque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 mb-4 mb-md-5">
              <MdOutlinePriceChange className="price" />
              <h5>Best Price</h5>
              <p>
                sit voluptatem accusantium dolore mque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 mb-4 mb-md-5">
              <FaToolbox className="custom" />
              <h5>Custom Box</h5>
              <p>
                sit voluptatem accusantium dolore mque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 mb-4 mb-md-5">
              <HiReceiptRefund className="refund" />
              <h5>Quick Refund</h5>
              <p>
                sit voluptatem accusantium dolore mque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="shop-banner">
          <div className="shop-content container">
            <h2>
              January sale is on! <br />
              with big{" "}
              <span style={{ color:" #F28123" }}>Discount...</span>
            </h2>
            <div className="sale-percent">
              <span>
                sale! <br />
                Upto
              </span>
              50% <span>off</span>
            </div>
            <button className="sale-btn">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
