import React, { useContext } from 'react'
import "./NewArrivals.css"
import { Container, Row, Col } from 'react-bootstrap';
import CartButton from '../cart-button/CartButton';
import GradientButton from "../gradientbutton/GradientButton"
import { Link } from "react-router-dom";

import Allproducts from "../../products-data/Data";
import { CartContext } from '../../context/CartContext';


const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

const NewArrivals = () => {

  const newProducts = Allproducts.filter(
    (item) => item.type === "new"
  );

  const {addToCart} = useContext(CartContext)

  return (
    <section className="section-space product-section">
      <Container fluid className='content-wrapper'>

        <Row>
          <Col>
            <h2 className="section-title text-center">
              New Arrival
            </h2>
          </Col>
        </Row>

        <Row className="g-5 g-md-3 g-lg-4 g-xl-4 mt-lg-2">

          {newProducts.map((item) => (

            <Col key={item.id} xs={12} sm={6} md={6} lg={3}>

            
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

              
                <CartButton buttontext="Add to Cart" onClick={addToCart} />

              </div>

            </Col>

          ))}

        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <GradientButton text="View All Products" />
          </Col>
        </Row>

      </Container>
    </section>
  )
}

export default NewArrivals;