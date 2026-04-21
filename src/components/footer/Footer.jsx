import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import footlogo from "../../assets/images/foot-logo.png"

import paymentImg from "../../assets/images/payment-icons.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-main bg-black text-white ">

      {/* Top Features */}
      <div className="footer-top  py-5">
        <Container className="content-wrapper">
          <Row className="gy-4 ">

            <Col xs={6} lg={3}>
              <div className="footer-feature d-flex align-items-center gap-3">
                <i style={{ color: "#B5C740" }} className="bi bi-star fs-3"></i>
                <div>
                  <h6 className="mb-2">High Quality</h6>
                  <p className="mb-0">Crafted from Top Materials</p>
                </div>
              </div>
            </Col>

            <Col xs={6} lg={3}>
              <div className="footer-feature d-flex align-items-center gap-3">
                <i style={{ color: "#7B27DC" }} className="bi bi-shield-check fs-3"></i>
                <div>
                  <h6 className="mb-1">Warranty Protection</h6>
                  <p className="mb-0">Over 2 years</p>
                </div>
              </div>
            </Col>

            <Col xs={6} lg={3}>
              <div className="footer-feature d-flex align-items-center gap-3">
                <i style={{ color: "#65FF47" }} className="bi bi-truck fs-3"></i>
                <div>
                  <h6 className="mb-1">Free Shipping</h6>
                  <p className="mb-0">Order over $150</p>
                </div>
              </div>
            </Col>

            <Col xs={6} lg={3}>
              <div className="footer-feature d-flex align-items-center gap-3">
                <i style={{ color: "#BA2074" }} className="bi bi-headset fs-3"></i>
                <div>
                  <h6 className="mb-1">24/7 Support</h6>
                  <p className="mb-0">Dedicated support</p>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </div>

      {/* Middle Section */}
      <div className="footer-middle py-2">
        <Container className="content-wrapper">
          <Row className="gy-4"> {/* gy-4 mobile spacing ke liye acha hai */}

            {/* About */}
            <Col xs={12} md={4} className="text-start">
              <img src={footlogo} alt="logo" />
              <p className="footer-text mt-3">
                Anakh Clothing is a celebration of Punjabi pride, culture, and individuality. Our designs blend traditional roots with modern fashion, empowering you to express your identity with confidence.
              </p>
            </Col>

            {/* Links - padding-start remove kar di hai mobile ke liye */}
            <Col xs={12} md={4} className="text-start ps-lg-5">
              <h6 className="mb-3 fs-3 ps-0  ">Quick Links</h6>
              <ul className="footer-links list-unstyled lh-lg">
                <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
                <li><Link to="/shop" className="text-white text-decoration-none">Shop</Link></li>
                <li><Link to="/men" className="text-white text-decoration-none">Men</Link></li>
                <li><Link to="/women" className="text-white text-decoration-none">Women</Link></li>
                <li><Link to="/new-arrival" className="text-white text-decoration-none">New Arrival</Link></li>
                <li><Link to="/contact" className="text-white text-decoration-none">Contact Us</Link></li>

              </ul>
            </Col>

            {/* Payment */}
            <Col xs={12} md={4} className="text-start">
              <h6 className="mb-3 fs-3">Payment Methods</h6>
              <img
                src={paymentImg}
                alt="Payments"
                className="payment-img img-fluid"
                style={{ marginLeft: "0" }}
              />
            </Col>

          </Row>
        </Container>
      </div>

      {/* Bottom Links */}
      <div className="footer-links-bar py-4  ">
        <Container className="content-wrapper">
          <Row className="align-items-center gy-3 ">

            {/* Social again (optional duplicate section as per your layout) */}
            <Col md={3} className="text-center text-md-start">
              <div className="social-icons d-flex gap-3 justify-content-center justify-content-md-start">
                <i className="bi bi-facebook fs-4"></i>
                <i className="bi bi-instagram fs-4"></i>
              </div>
            </Col>

            {/* Policy Links */}
            <Col md={9}>
              <ul className="footer-bottom-links d-flex flex-wrap gap-4 text-white justify-content-center justify-content-md-end list-unstyled m-0">
                <li><a href="#" className="text-decoration-none text-white">Terms and Conditions</a></li>
                <li><a href="#" className="text-decoration-none text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-decoration-none text-white">Shipping Policy</a></li>
              </ul>
            </Col>

          </Row>
        </Container>
      </div>

      {/* Bottom */}
      <div className="footer-bottom  bg-light text-black py-2">
        <Container className="content-wrapper" >
          <Row className="align-items-center">
            <Col md={12} className="text-center text-center">
              <small>© 2026 <b>Anakh Clothing Company</b>. All rights reserved.
              </small>
            </Col>
          </Row>
        </Container>
      </div>

    </footer>
  );
};

export default Footer;