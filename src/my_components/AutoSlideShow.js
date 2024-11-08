// AutoSlideshow.js
import React, { useState, useEffect } from "react";

const AutoSlideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slideshow">
      <img src={images[currentIndex]} alt="Smartphone" className="img-fluid w-75" />
    </div>
  );
};

export default AutoSlideshow;
