import React from 'react'
import HeroImg from '../../../assets/images/banner2.png';
import "./HomeMiddleBanner.css"


const HomeMiddleBanner = () => {
    return (
        <div className="hero-container">
            <img src={HeroImg} alt="Hero Banner" className="middle-img" />
        </div>
    )
}

export default HomeMiddleBanner