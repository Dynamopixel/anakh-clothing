import React from 'react'
import WomenHoodie from '../../../assets/images/womanhoodie.png';
import "./HomeMiddleBanner.css"

const HomeSale = () => {
    return (
        <div className="hero-container">
            <img src={WomenHoodie} alt="Hero Banner" className="middle-img" />
        </div>
    )
}

export default HomeSale