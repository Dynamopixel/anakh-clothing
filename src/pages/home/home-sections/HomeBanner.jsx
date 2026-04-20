import React from 'react'
import HeroImg from '../../../assets/images/herobanner.png';
import './HomeBanner.css';


const HomeBanner = () => {
    return (
        <div className="hero-container">
            <img src={HeroImg} alt="Hero Banner" className="hero-img" />
        </div>
    )
}

export default HomeBanner