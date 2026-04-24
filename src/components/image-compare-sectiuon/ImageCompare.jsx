import React, { useRef, useState, useEffect } from 'react'
import "./ImageCompare.css";

import Playerr from "../../assets/images/playerr.png";

import FrontImage from "../../assets/images/frame1.jpg"
import BackImage from "../../assets/images/frame2.jpg"

const ImageCompare = () => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const bounds = containerRef.current.getBoundingClientRect();
    let x = clientX - bounds.left;
    let percentage = (x / bounds.width) * 100;

    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;

    setPosition(percentage);
  };

  const startDrag = () => {
    const onMouseMove = (event) => handleMove(event.clientX);
    const stopDrag = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stopDrag);
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", stopDrag);
  };

  const startTouch = () => {
    const onTouchMove = (event) => handleMove(event.touches[0].clientX);
    const stopTouch = () => {
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", stopTouch);
    };
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", stopTouch);
  };

  return (
    <div className="container-fluid p-0 bg-dark " style={{ width: "90%", marginBottom:"80px" }}>
      <div ref={containerRef} className="slider-container">

        {/* BACK SIDE (Before) */}
        <img src={BackImage} alt="Back Side" className="image-under" />

        {/* FRONT SIDE (After) */}
        <div className="image-over-wrapper" style={{ width: `${position}%` }}>
          <img
            src={FrontImage}
            alt="Front Side"
            className="image-over"
            style={{ width: `${containerWidth}px` }}
          />
        </div>

        {/* Labels */}
        <div className="label-tag" style={{ left: "15px" }}>FRONT </div>
        <div className="label-tag" style={{ right: "15px" }}>BACK </div>

        {/* Slider */}
        <div
          onMouseDown={startDrag}
          onTouchStart={startTouch}
          className="slider-handle"
          style={{ left: `${position}%` }}
        >
          <span><img src={Playerr} /></span>
        </div>

      </div>
    </div>
  );
};

export default ImageCompare;