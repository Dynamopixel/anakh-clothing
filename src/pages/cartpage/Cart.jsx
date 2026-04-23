import React, { useContext } from 'react'
import GradientButton from '../../components/gradientbutton/GradientButton'
import { Link, useNavigate } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import "./Cart.css"
import { CartContext } from '../../context/CartContext'


const Cart = () => {

    const { cartItems, updateQty, clearCart } = useContext(CartContext)
    const navigate = useNavigate();

    //empty cart show
    if (cartItems.length === 0) {
        return (
            <div style={{ height: "calc(100vh - 550px)" }} className="d-flex justify-content-center align-items-center flex-column">
                <h1 style={{ fontSize: "clamp(22px, 5vw, 50px)", marginBottom: "20px" }}>
                    Your cart is currently empty.
                </h1>
                <Link to="/shop">
                    <GradientButton
                        text={
                            <>
                                <i className="bi bi-arrow-left"></i> RETURN TO SHOP
                            </>
                        }
                    />
                </Link>
            </div>
        )
    }

    //total cart price
    const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
    )

    return (
        <>
            <Container className='cartt section-space'>
                <Row>
                    <Col lg={12}>
                        <h1 className='text-center mb-lg-5 mb-sm-3'>Cart</h1>
                    </Col>


                    <div className="table-responsive">
                        <table className="table table-bordered">

                            <thead className="table-dark px-3">
                                <tr>
                                    <th className='ps-2'>Product</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>

                            <tbody >
                                {cartItems.map((item, index) => (
                                    item && (
                                        <tr key={index}>
                                            <td>
                                                <div className="d-flex align-items-center gap-3 ps-2">
                                                    <img
                                                        src={item.img}
                                                        alt={item.name}
                                                        style={{
                                                            width: "60px",
                                                            height: "60px",
                                                            objectFit: "cover",
                                                            borderRadius: "8px",

                                                        }}
                                                    />
                                                    <span>{item.name}</span>
                                                </div>
                                            </td>

                                            <td>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={item.qty}
                                                    className="form-control"
                                                    style={{ width: "80px" }}
                                                    onChange={(e) => updateQty(item.id, e.target.value)}
                                                />
                                            </td>

                                            <td>₹{item.price}</td>
                                        </tr>
                                    )
                                ))}
                            </tbody>

                        </table>
                    </div>

                    {/* bottom section */}
                    <div className="d-flex justify-content-end align-items-center gap-4 mt-4 flex-wrap">

                        <h5 className="mb-0">
                            Total = <strong>₹{total}</strong>
                        </h5>

                        <button
                            className="place-order"
                            onClick={() => {
                                clearCart();          
                                navigate("/thank-you"); 
                            }}
                        >
                            Place Order
                        </button>

                    </div>

                </Row>
            </Container>
        </>
    )
}

export default Cart