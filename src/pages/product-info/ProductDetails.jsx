import { useContext } from 'react'
import {
    Container,
    Row,
    Col,
} from "react-bootstrap";

import { useParams } from "react-router-dom";
import Allproducts from "../../products-data/Data";

import "./ProductDetails.css"

import CartButton from "../../components/cart-button/CartButton";
import { CartContext } from "../../context/CartContext";

const slugify = (text) =>
    text
        .toLowerCase()
        .trim()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");

const ProductDetails = () => {

    const { name } = useParams();

    const product = Allproducts.find(
        (item) => slugify(item.name) === name
    );

    if (!product) {
        return <h2 className="text-center mt-5">Product not found</h2>;
    }

    return (
        <div className="section-space">
            <Container fluid className="content-wrapper">
                <Row className="product-detail-row mt-3">

                    {/* Image */}
                    <Col lg={6} md={6} sm={12}>
                        <div className="product-image-wrapper px-lg-5">
                            <img src={product.img} alt={product.name} className="product-image" />
                        </div>
                    </Col>

                    {/* Info */}
                    <Col lg={6} md={6} sm={12} className="mb-4">

                        <div className="product-info sticky-sidebar">

                            <h2 className="product-title mb-2">
                                {product.name}
                            </h2>
                            <h4 className='text-decoration-line-through mb-2'>{product.cutPrice}</h4>

                            <p className="product-price mb-3">
                                ₹{product.price}
                            </p>

                            <p className="product-desc">
                                {product.description}
                            </p>

                            <div className=" d-flex align-items-center gap-3 mb-4">

                                <CartButton product={product} />
                            </div>

                            <div className="product-meta">

                                <div className="meta-item d-flex gap-3 mb-3">
                                    <i className="bi bi-truck fs-4"></i>
                                    <p className="mb-0">Free shipping across India</p>
                                </div>

                                <div className="meta-item d-flex gap-3 mb-3">
                                    <i className="bi bi-arrow-repeat fs-4"></i>
                                    <p className="mb-0">7 Days easy return</p>
                                </div>

                                <div className="meta-item d-flex gap-3">
                                    <i className="bi bi-shield-check fs-4"></i>
                                    <p className="mb-0">Secure payment</p>
                                </div>

                            </div>

                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default ProductDetails;