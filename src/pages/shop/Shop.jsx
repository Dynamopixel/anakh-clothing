import { useContext, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
} from "react-bootstrap";

import { useParams } from "react-router-dom";

import Allproducts from "../../products-data/Data";
import "./Shop.css";
import CartButton from "../../components/cart-button/CartButton";
import { CartContext } from "../../context/CartContext";


const Shop = () => {

  const {addToCart} = useContext(CartContext)

  const [type, setType] = useState({
    new: false,
    summer: false,
  });

  const [sort, setSort] = useState("");

  //  URL PARAM (men / women / new-arrival)
  const { category } = useParams();

  const filteredProducts = Allproducts

    
    .filter((p) => {

      //  MEN / WOMEN
      if (category === "men" || category === "women") {
        return p.category === category;
      }

      //  NEW ARRIVAL ROUTE  
      if (category === "new-arrival") {
        return p.type === "new";
      }

      return true;
    })

    // COLLECTION FILTER 
    .filter((p) => {
      const isTypeSelected = type.new || type.summer;

      if (!isTypeSelected) return true;

      return (
        (type.new && p.type === "new") ||
        (type.summer && p.type === "summer")
      );
    })

    // SORT
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });



  return (
    <div className="section-space">
      <Container fluid className="content-wrapper">

        <Row className="g-3 gx-lg-5">

          <h2 className="section-title text-center mb-lg-5">
            Shop
          </h2>

          {/* FILTER SIDEBAR */}
          <Col lg={3} md={4} sm={12} className="mb-4 ">

            <div className="content-wrapper filter-panel p-4 shadow-sm rounded sticky-sidebar">

              <h4 className="mb-4">Filters</h4>

              {/* SORT */}
              <h6 className="pt-3 pb-2 fs-5 ">Sort by Price</h6>

              <Form.Check
                type="checkbox"
                label="Low to High"
                checked={sort === "low"}
                onChange={() =>
                  setSort(sort === "low" ? "" : "low")
                }
              />

              <Form.Check
                type="checkbox"
                label="High to Low"
                checked={sort === "high"}
                onChange={() =>
                  setSort(sort === "high" ? "" : "high")
                }
              />

              <hr />

              {/* CATEGORY */}
              <h6 className="pt-3 pb-2 fs-5 ">Category</h6>

              <Form.Check
                type="checkbox"
                label="Men"
                checked={category === "men"}
                onChange={(e) => {
                  if (e.target.checked) {
                    window.location.href = "/shop/men";
                  } else {
                    window.location.href = "/shop";
                  }
                }}
              />

              <Form.Check
                type="checkbox"
                label="Women"
                checked={category === "women"}
                onChange={(e) => {
                  if (e.target.checked) {
                    window.location.href = "/shop/women";
                  } else {
                    window.location.href = "/shop";
                  }
                }}
              />

              <hr />

              {/* COLLECTION */}
              <h6 className="pt-3 pb-2 fs-5 ">Collection</h6>

              {/* 👉 NEW ARRIVAL ADDED */}
              <Form.Check
                type="checkbox"
                label="New Arrival"
                checked={category === "new-arrival"}
                onChange={(e) => {
                  if (e.target.checked) {
                    window.location.href = "/shop/new-arrival";
                  } else {
                    window.location.href = "/shop";
                  }
                }}
              />

              <Form.Check
                type="checkbox"
                label="Summer Collection"
                onChange={(e) =>
                  setType({ ...type, summer: e.target.checked })
                }
              />

            </div>
          </Col>

          {/* PRODUCTS */}
          <Col lg={9} md={8} sm={12} >

            <Row>
              {filteredProducts.map((item) => (
                <Col lg={4} md={6} sm={12} key={item.id} className="mb-4">

                  <Card className="h-100 product-card shadow-sm">

                    <Card.Img
                      variant="top"
                      src={item.img}
                    />

                    <Card.Body>
                      <Card.Title className="fs-6">
                        {item.name}
                      </Card.Title>

                      <Card.Text>
                        <span className="fw-bold px-2">
                          ₹{item.price}
                        </span>{" "}
                        <del className="text-muted cut-price">
                          ₹{item.cutPrice}
                        </del>
                      </Card.Text>

                      <CartButton buttontext="Add to Cart" />

                    </Card.Body>

                  </Card>

                </Col>
              ))}
            </Row>

          </Col>

        </Row>

      </Container>
    </div>
  );
};

export default Shop;