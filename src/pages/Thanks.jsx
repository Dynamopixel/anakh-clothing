import React from 'react'
import { Link } from 'react-router-dom'
import GradientButton from '../components/gradientbutton/GradientButton'

const Thanks = () => {
    return (
        <div>
            <div style={{ height: "calc(100vh - 550px)" }} className="d-flex justify-content-center align-items-center flex-column">
                <h1 style={{ fontSize: "clamp(22px, 5vw, 50px)", marginBottom: "20px" }}>
                    Thank you for visiting ❤️
                </h1>
                <p className="mt-3 text-center">
                    For more details contact us:
                    <br />
                    <strong>
                        sales.dynamopixel@gmail.com</strong>
                </p>
                <Link to="/contact">
                    <GradientButton
                        text={
                            <>
                                <i className="bi bi-arrow-left"></i> CONTACT US
                            </>
                        }
                    />
                </Link>
            </div>
        </div>
    )
}

export default Thanks