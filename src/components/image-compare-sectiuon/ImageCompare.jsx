import React, { useRef, useState, useEffect } from 'react'
import "./ImageCompare.css";

const ImageCompare = () => {
    const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
  const [containerWidth, setContainerWidth] = useState(0);

  // Container ki width calculate karne ke liye
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
    
    // Window resize hone par width update karein
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

  // Mouse Events
  const startDrag = (e) => {
    const onMouseMove = (event) => handleMove(event.clientX);
    const stopDrag = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stopDrag);
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", stopDrag);
  };

  // Touch Events
  const startTouch = (e) => {
    const onTouchMove = (event) => handleMove(event.touches[0].clientX);
    const stopTouch = () => {
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", stopTouch);
    };
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", stopTouch);
  };

  const imageUrl = "https://ghpc.in/cdn/shop/articles/10-best-clothing-colour-combination-ideas-for-men-a-complete-guide-ghpc.jpg?v=1707562652&width=2048";
  return (
   <div className="container-fluid  d-flex justify-content-center align-items-center bg-dark">
      <div ref={containerRef} className="slider-container">
        
        {/* BLURRED IMAGE (Ye hamesha peeche rahegi) */}
        <img src={imageUrl} alt="Blurred Shirt" className="image-under" />

        {/* CLEAR IMAGE (Ye slider ke saath move hogi) */}
        <div className="image-over-wrapper" style={{ width: `${position}%` }}>
          <img
            src={imageUrl}
            alt="Clear Shirt"
            className="image-over"
            style={{ width: `${containerWidth}px` }}
          />
        </div>

        {/* Updated Labels */}
        <div className="label-tag" style={{ left: "15px" }}>Clear View</div>
        <div className="label-tag" style={{ right: "15px" }}>Blurred View</div>

        {/* Slider Handle */}
        <div
          onMouseDown={startDrag}
          onTouchStart={startTouch}
          className="slider-handle"
          style={{ left: `${position}%` }}
        >
          <span>⇆</span>
        </div>
      </div>
    </div>
  )
}

export default ImageCompare