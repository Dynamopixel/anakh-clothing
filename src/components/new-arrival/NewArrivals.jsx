import React from 'react'
import "./NewArrivals.css"
import { Container, Row, Col } from 'react-bootstrap';
import CartButton from '../cart-button/CartButton';
import GradientButton from "../gradientbutton/GradientButton"

import img1 from "../../assets/images/arrive1.png"
import img2 from "../../assets/images/arrive2.png"
import img3 from "../../assets/images/arrive3.png"
import img4 from "../../assets/images/arrive4.png"

const products = [
  {
    img: img1,
    name: 'Carpe Omnia T-Shirt',
    price: 999,
    cutPrice: 1299,
  },
  {
    img: img2,
    name: 'Shaheed Akali Sweatshirt',
    price: 1299,
    cutPrice: 1599,
  },
  {
    img: img3,
    name: 'Kaur Print Women’s Hoodie',
    price: 1299,
    cutPrice: 1599,
  },
  {
    img: img4,
    name: 'Be Different Hoodie',
    price: 1299,
    cutPrice: 1599,
  },
];


const NewArrivals = () => {
  return (
    <section className="section-space product-section">

      <Container fluid className='content-wrapper'>

        {/* Heading */}
        <Row >
          <Col>
            <h2 className="section-title text-center ">
              New Arrival
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

               <CartButton buttontext="Add to Cart" />

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

export default NewArrivals