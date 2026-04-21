import React from 'react'
import GradientButton from '../../components/gradientbutton/GradientButton'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <div style={{ height: "calc(100vh - 550px)" }} className="d-flex justify-content-center align-items-center flex-column">
            <h1 style={{ fontSize: "50px", marginBottom: "20px" }} >Your cart is currently empty.</h1>
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

export default Cart