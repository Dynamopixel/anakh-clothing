import React, { useContext, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MyNavbar.css';
import Logo from "../../assets/images/logo.png";
import { CartContext } from '../../context/CartContext';


const MyNavbar = () => {

  const [expanded, setExpanded] = useState(false)

  const { cartItems } = useContext(CartContext)

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-bar text-center py-2 text-white">
        Free Shipping All Over India for Prepaid Orders
        {/* <span className="ms-2 close-icon">✕</span> */}
      </div>


      {/* Main Navbar */}
      <Navbar
        bg="white"
        expand="lg"
        sticky="top"
        className="main-navbar shadow-sm"
        expanded={expanded}
      >
        <Container fluid >

          {/* Logo */}
          <Navbar.Brand as={Link} to="/" className="brand-logo" onClick={() => setExpanded(false)}>
            <img
              src={Logo}
              alt="Aash Clothing"
              className="logo-img"
            />

          </Navbar.Brand>

          {/* Toggle Button */}
          <Navbar.Toggle aria-controls="navbarScroll" className="custom-toggler" onClick={() => setExpanded(expanded ? false : true)}>
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>

          {/* Navbar Links & Icons */}
          <Navbar.Collapse id="navbar-nav">

            <Nav className="mx-auto nav-links">
              <Nav.Link
                as={Link} onClick={() => setExpanded(false)}
                to="/"

              >
                HOME
              </Nav.Link>
              <Nav.Link
                as={Link} onClick={() => setExpanded(false)}
                to="/shop"

              >
                SHOP
              </Nav.Link>
              <Nav.Link
                as={Link} onClick={() => setExpanded(false)}
                to="/contact"

              >
                CONTACT
              </Nav.Link>

            </Nav>

            {/* Right Side Icons */}
            <Nav className="nav-icons d-flex align-items-center">
              <Nav.Link href="#" className="icon-link">
                <i className="bi bi-search"></i>
              </Nav.Link>

              <Nav.Link as={Link} to="/cart" className="icon-link position-relative" onClick={() => setExpanded(false)}>
                <i className="bi bi-bag"></i>

                <span className="cart-badge">
                  {cartItems?.length || 0}
                </span>

              </Nav.Link>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;