import React, { useContext, useState, useMemo } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MyNavbar.css';
import Logo from "../../assets/images/logo.png";
import { CartContext } from '../../context/CartContext';

const MyNavbar = () => {

  const [expanded, setExpanded] = useState(false);
  const { cartItems } = useContext(CartContext);

 const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar text-center py-2 text-white">
        Free Shipping All Over India for Prepaid Orders
      </div>

      {/* Navbar */}
      <Navbar
        bg="white"
        expand="lg"
        sticky="top"
        className="main-navbar shadow-sm"
        expanded={expanded}
      >
        <Container fluid>

          {/* Logo */}
          <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
            <img src={Logo} alt="Logo" className="logo-img" />
          </Navbar.Brand>

          {/* Toggle */}
          <Navbar.Toggle
            onClick={() => setExpanded(!expanded)}
          />

          <Navbar.Collapse>

            {/* Links */}
            <Nav className="mx-auto nav-links">
              <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>HOME</Nav.Link>
              <Nav.Link as={Link} to="/shop" onClick={() => setExpanded(false)}>SHOP</Nav.Link>
              <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>CONTACT</Nav.Link>
            </Nav>

            {/* Icons */}
            <Nav className="nav-icons d-flex align-items-center">

              <Nav.Link>
                <i className="bi bi-search"></i>
              </Nav.Link>

              <Nav.Link as={Link} to="/cart" onClick={() => setExpanded(false)} className="position-relative">

                <i className="bi bi-bag"></i>

               
                <span className="cart-badge">
                  {cartCount}
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