import { useContext, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
} from "react-bootstrap";

import { useParams, useNavigate } from "react-router-dom";

import Allproducts from "../../products-data/Data";
import "./Shop.css";
import CartButton from "../../components/cart-button/CartButton";
import { CartContext } from "../../context/CartContext";


const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

const Shop = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const { category } = useParams();

  const [type, setType] = useState({
    new: false,
    summer: false,
  });

  const [sort, setSort] = useState("");

  // ✅ FILTER PRODUCTS
  const filteredProducts = Allproducts
    .filter((p) => {
      if (category === "men" || category === "women") {
        return p.category === category;
      }

      if (category === "new-arrival") {
        return p.type === "new";
      }

      return true;
    })
    .filter((p) => {
      const isTypeSelected = type.new || type.summer;

      if (!isTypeSelected) return true;

      return (
        (type.new && p.type === "new") ||
        (type.summer && p.type === "summer")
      );
    })
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
          <Col lg={3} md={4} sm={12} className="mb-4">

            <div className="content-wrapper filter-panel p-4 shadow-sm rounded sticky-sidebar">

              <h4 className="mb-4">Filters</h4>

              {/* SORT */}
              <h6 className="pt-3 pb-2 fs-5">Sort by Price</h6>

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
              <h6 className="pt-3 pb-2 fs-5">Category</h6>

              <Form.Check
                type="checkbox"
                label="Men"
                checked={category === "men"}
                onChange={(e) => {
                  if (e.target.checked) navigate("/shop/men");
                  else navigate("/shop");
                }}
              />

              <Form.Check
                type="checkbox"
                label="Women"
                checked={category === "women"}
                onChange={(e) => {
                  if (e.target.checked) navigate("/shop/women");
                  else navigate("/shop");
                }}
              />

              <hr />

              {/* COLLECTION */}
              <h6 className="pt-3 pb-2 fs-5">Collection</h6>

              <Form.Check
                type="checkbox"
                label="New Arrival"
                checked={category === "new-arrival"}
                onChange={(e) => {
                  if (e.target.checked) navigate("/shop/new-arrival");
                  else navigate("/shop");
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
          <Col lg={9} md={8} sm={12}>

            <Row>
              {filteredProducts.map((item) => (
                <Col lg={4} md={6} sm={12} key={item.id} className="mb-4">

               
                  <Card
                    className="h-100 product-card shadow-sm"
                    onClick={() =>
                      navigate(`/${slugify(item.name)}`)
                    }
                    style={{ cursor: "pointer" }}
                  >

                    <Card.Img variant="top" src={item.img} />

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

                      {/* prevent navigation when clicking button */}
                      <div onClick={(e) => e.stopPropagation()}>
                        <CartButton buttontext="Add to Cart" product={item} />
                      </div>

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