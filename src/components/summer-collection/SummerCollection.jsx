import React from 'react'
import "./SummerCollection.css"
import { Container, Row, Col } from 'react-bootstrap';
import GradientButton from "../gradientbutton/GradientButton"
import CartButton from '../cart-button/CartButton';

import Allproducts from "../../products-data/Data"
import { Link } from 'react-router-dom';

const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

const SummerCollection = () => {

  const summerProducts = Allproducts.filter((item) => item.type === "summer")

  return (
    <section className="section-space product-section">

      <Container fluid className='content-wrapper'>

        {/* Heading */}
        <Row >
          <Col>
            <h2 className="section-title text-center ">
              Summer Collection
            </h2>
          </Col>
        </Row>

        {/* Products */}
        <Row className="g-5 g-md-3 g-lg-4 g-xl-4 mt-lg-2">

          {summerProducts.map((item, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={6}
              lg={3}
            >

              <div className="product-card">

              
                <Link style={{ textDecoration: "none", color: "inherit" }}
                  to={`/${slugify(item.name)}`}
                  className="product-link"
                >
                  <img src={item.img} alt={item.name} />

                  <h5 className="product-name pt-4 fs-6 fw-300">
                    {item.name}
                  </h5>

                  <div className="price-box">
                    <span className="cut-price">
                      ₹{item.cutPrice}
                    </span>
                    <span className="price">
                      ₹{item.price}
                    </span>
                  </div>
                </Link>

                {/* Button STILL inside card */}
                <div className="cart-btn-wrapper">
                  <CartButton buttontext="Add to Cart" product={item} />
                </div>

              </div>
            </Col>
          ))}

        </Row>

        {/* Bottom Button */}
        <Row className=" mt-5">
          <Col className="text-center">
            <GradientButton text="View All Products" />
          </Col>
        </Row>

      </Container>

    </section>
  )
}

export default SummerCollection