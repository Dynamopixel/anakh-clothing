import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MyNavbar.css';
import Logo from "../../assets/images/logo.png";

const MyNavbar = () => {

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
      >
        <Container fluid >

          {/* Logo */}
          <Navbar.Brand as={Link} to="/" className="brand-logo">
            <img
              src={Logo}
              alt="Aash Clothing"
              className="logo-img"
            />

          </Navbar.Brand>

          {/* Toggle Button */}
          <Navbar.Toggle aria-controls="navbarScroll" className="custom-toggler">
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>

          {/* Navbar Links & Icons */}
          <Navbar.Collapse id="navbar-nav">

            <Nav className="mx-auto nav-links">
              <Nav.Link
                as={Link}
                to="/men"

              >
                MEN
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/women"

              >
                WOMEN
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/new-arrival"

              >
                NEW ARRIVAL
              </Nav.Link>
            </Nav>

            {/* Right Side Icons */}
            <Nav className="nav-icons d-flex align-items-center">
              <Nav.Link href="#" className="icon-link">
                <i className="bi bi-search"></i>
              </Nav.Link>

              <Nav.Link as={Link} to="/cart" className="icon-link">
                <i className="bi bi-bag"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;