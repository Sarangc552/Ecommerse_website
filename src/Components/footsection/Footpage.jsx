import React from "react";
import "./foot.css";
import { IoIosSend } from "react-icons/io";
import { FaGreaterThan } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footpage = () => {
  return (
    <div>
      <div className="footsection">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="about-widget">
                <h2>About Us</h2>
                <p>
                  Ut enim ad minim veniam perspiciatis unde omnis iste natus
                  error sit voluptatem accusantium doloremque laudantium, totam
                  rem aperiam, eaque ipsa quae.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="gettouch-widget">
                <h2 className="">Get in Touch</h2>
                <div>
                  <h6>34/8, East Hukupara, Gifirtok, Sadan.</h6>
                  <h6>support@fruitkha.com</h6>
                  <h6>+91 6238494966</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="pages-widget">
                <h2 className="">Pages</h2>
                <div>
                  <h6>
                    <FaGreaterThan className="arrow" />
                    Home
                  </h6>
                  <h6>
                    <FaGreaterThan className="arrow" />
                    About
                  </h6>
                  <h6>
                    <FaGreaterThan className="arrow" />
                    Contact
                  </h6>
                  <h6>
                    <FaGreaterThan className="arrow" />
                    Cart
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="subscribe-widget">
                <h2>Subscribe</h2>
                <p>Subscribe to our mailing list to get the latest updates.</p>
                <form action="">
                  <input
                    type="email"
                    placeholder="Email"
                    className="subscribe-email"
                  />
                  <button type="submit">
                    <IoIosSend className="icon" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-writesection">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 copy-contentsection">
              <h5>
                Copyrights © 2019 -{" "}
                <span style={{ color: "#F28123" }}>Sarang</span>, All Rights
                Reserved. <br />
                Distributed By -{" "}
                <span style={{ color: "#F28123" }}>Themewagon</span>
              </h5>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <div className="social-icon">
                <FaFacebook className="icons" />
                <FaTwitter className="icons" />
                <FaInstagramSquare className="icons" />
                <FaLinkedin className="icons" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footpage;
