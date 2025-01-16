import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { SiShopify } from "react-icons/si";
import { FcSearch } from "react-icons/fc";
import "./navigation.css";
import { FaUserCircle } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2";
import { productcontext } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { CiLogout } from "react-icons/ci";

const Navi = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const { cartitem, product, setproduct } = useContext(productcontext);
  console.log(product);
  const [searching, setsearching] = useState("");

  const searchitem = (e) => {
    setsearching(e.target.value);
  };
  const submithandle = (i) => {
    i.preventDefault();
    console.log(searching);
    const filteredproduct = product.filter((e) =>
      e.title.toLowerCase().includes(searching.toLocaleLowerCase())
    );
    setproduct(filteredproduct);
  };

  const navshoping = useNavigate();
  const shopcart = () => {
    navshoping("/cart");
  };
  return (
    <div>
      <Navbar expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand href="#home" className="brand-logo">
            <SiShopify className="navicon" />
            ShopCart
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <form
              className="searchbox d-none d-lg-flex"
              onSubmit={submithandle}
            >
              <input
                type="text"
                placeholder="Search products..."
                onChange={searchitem}
              />
              <button aria-label="Search">
                <FcSearch className="search-icon" type="submit" />
              </button>
            </form>

            <Nav className="m-auto">
              <Nav.Link href="#home" className="nav-link">
                <Link to="/home" className="nav-home">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#features" className="nav-link">
                <Link to="/about" className="nav-about">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link href="#pricing" className="nav-link">
                <Link to="/contact" className="nav-contact">
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
            <div>
              <span className="userdetails">
                {isAuthenticated ? (
                  <span className="text-success">{user.name}</span>
                ) : (
                  <span
                    className="text-danger"
                    onClick={() => loginWithRedirect()}
                  >
                    please login
                  </span>
                )}
              </span>
            </div>

            <div className="d-flex align-items-center">
              {isAuthenticated ? (
                <CiLogout className="logout-btn"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                />
              ) : (
                <FaUserCircle
                  className="login-btn"
                  onClick={() => loginWithRedirect()}
                />
              )}

              <div className="cart-section align-items-center">
                <HiShoppingCart className="cart-icon" onClick={shopcart} />
                <div className="text-danger fw-bold fs-5">
                  {cartitem.length}
                </div>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navi;
