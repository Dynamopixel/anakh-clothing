import React from 'react'
import GradientButton from '../../components/gradientbutton/GradientButton'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'

const Cart = () => {
    return (
        <>

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

            <Container>
                <Row>
                    <table className="table table-bordered ">
                        <thead className="table-dark px-3">
                            <tr>
                                <th><h4 className="my-1 px-2">Product</h4></th>
                                <th><h4 className="my-1 px-2">Quantity</h4></th>
                                <th><h4 className="my-1 px-2">Subtotal</h4></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="my-1 px-2">Sample Product</td>
                                <td className="my-1 px-2">
                                    <input type="number" min="1" max="10" step="1"  />
                                </td>
                                <td className="my-1 px-2">₹100</td>
                            </tr>
                             <tr>
                                <td className="my-1 px-2">Sample Product</td>
                                <td className="my-1 px-2">
                                    <input type="number" min="1" max="10" step="1"  />
                                </td>
                                <td className="my-1 px-2">₹100</td>
                            </tr>
                             <tr>
                                <td className="my-1 px-2">Sample Product</td>
                                <td className="my-1 px-2">
                                    <input type="number" min="1" max="10" step="1"  />
                                </td>
                                <td className="my-1 px-2">₹100</td>
                            </tr>
                             <tr>
                                <td className="my-1 px-2">Sample Product</td>
                                <td className="my-1 px-2">
                                    <input type="number" min="1" max="10" step="1"  />
                                </td>
                                <td className="my-1 px-2">₹100</td>
                            </tr>
                        </tbody>
                    </table>
                </Row>
            </Container>

        </>
    )
}

export default Cart