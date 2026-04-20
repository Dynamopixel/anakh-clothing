import React from 'react'
import "./SummerCollection.css"
import { Container, Row, Col } from 'react-bootstrap';
import GradientButton from "../gradientbutton/GradientButton"

import summer1 from "../../assets/images/summer1.png"
import summer2 from "../../assets/images/summer2.png"
import summer3 from "../../assets/images/summer3.png"
import summer4 from "../../assets/images/summer4.png"

const products = [
  {
    img: summer1,
    name: 'Text & Lion Print T-Shirt',
    price: 999,
    cutPrice: 1299,
  },
  {
    img: summer2,
    name: 'Hacker Face Mask Print T-Shirt',
    price: 699,
    cutPrice: 999,
  },
  {
    img: summer3,
    name: 'Authentic Gabru T-Shirt',
    price: 699,
    cutPrice: 999,
  },
  {
    img: summer4,
    name: 'Punjabi Aa Gaye Oye T-Shirt',
    price: 699,
    cutPrice: 999,
  },
];


const SummerCollection = () => {
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

          {products.map((item, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={6}
              lg={3}
            >

              <div className="product-card">

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

                <button className="add-btn">
                  Add to Cart
                </button>

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