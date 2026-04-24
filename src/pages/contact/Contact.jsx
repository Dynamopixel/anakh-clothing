import React, { useState } from 'react'
import {
  Container,
  Row,
  Col, Card, Form, Button
} from "react-bootstrap";

import "./Contact.css"


const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xkokklgg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("SUCCESS");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setStatus("ERROR");
    }
  };


  return (
    <div className="section-space">
      <Container fluid className="content-wrapper">

        <Row>
          <Container>

            <h2 className="section-title text-center mb-lg-5">
              Contact Us
            </h2>

            <div className='my-lg-4 mb-2 map-wrapper'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.34915138254!2d76.6839991!3d30.7085834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa550e8d8fe83bced%3A0x3c402d255264045f!2sDynamo%20Pixel!5e0!3m2!1sen!2sin!4v1776763219929!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Container>


        </Row>

        <Row className="gy-lg-3 gy-3  gx-lg-5 mt-lg-3 mt-3 farmer">


          <Col lg={5} md={5} sm={12} className="mb-4 ">

            <div className=" pt-sm-3 p-lg-4 sticky-sidebar">

              <h4 className="mb-lg-4 mb-3">Contact us</h4>
              <p>At <b>Anakh Clothing</b>, your feedback, questions, and suggestions matter to us. Whether you need help with an order, sizing, delivery, or just want to say hello — our team is always here to assist you. <br />

                You can reach out to us anytime and we’ll make sure to respond as quickly as possible.</p>

              <hr />

              <Container>


                <Col >
                  <div className="footer-feature d-flex align-items-center gap-3 mb-4">
                    <i className="bi bi-shop fs-3"></i>
                    <div>

                      <p className="mb-0">5th Floor, Dynamo Pixel, Vista Business Tower, D-270, <br /> Phase 8B, Industrial Area, Sector 74, Punjab 160055</p>
                    </div>
                  </div>
                </Col>

                <Col >
                  <div className="footer-feature d-flex align-items-center gap-3 mb-4">
                    <i className="bi bi-telephone-outbound fs-3"></i>
                    <div>

                      <p className="mb-0">+91 123456789</p>
                      <p className="mb-0">+91 123456789</p>
                    </div>
                  </div>
                </Col>

                <Col >
                  <div className="footer-feature d-flex align-items-center gap-3 mb-4">
                    <i className="bi bi-envelope fs-3"></i>
                    <div>

                      <p className="mb-0">info@gmail.com</p>
                      <p className="mb-0">company@gmail.com</p>
                    </div>
                  </div>
                </Col>

                <Col md={3} className="text-center text-md-start">
                  <h4 className='mt-lg-4 mb-lg-3'>Follow Us</h4>
                  <div className="social-icons d-flex gap-4 justify-content-center justify-content-md-start">
                    <i className="bi bi-facebook fs-4 "></i>
                    <i className="bi bi-instagram fs-4"></i>
                    <i className="bi bi-whatsapp fs-4"></i>
                    <i className="bi bi-twitter-x fs-4"></i>
                  </div>
                </Col>


              </Container>


            </div>
          </Col>


          <Col lg={7} md={7} sm={12}>
            <Form onSubmit={handleSubmit} className="shadow-sm formcnt rounded p-3">

              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="number"
                  placeholder="Enter phone"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter message"
                  required
                />
              </Form.Group>

              <Button variant="dark" type="submit" className='px-5 py-2'>
                Submit
              </Button>

              {/* SUCCESS MESSAGE */}
              {status === "SUCCESS" && (
                <div className="alert alert-success mt-3">
                  Form submitted successfully! Our team will reach you soon.
                </div>
              )}

              {/* ERROR MESSAGE */}
              {status === "ERROR" && (
                <div className="alert alert-danger mt-3">
                  Something went wrong. Please try again.
                </div>
              )}

            </Form>
          </Col>

        </Row>

      </Container>
    </div>
  )
}

export default Contact

