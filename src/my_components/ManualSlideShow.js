// ManualSlideshow.js
import React, { useState } from "react";

const ManualSlideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="manual-slideshow">
      <button onClick={goToPreviousSlide} className="btn btn-primary">Previous</button>
      <img src={images[currentIndex]} alt="Smartphone" className="img-fluid w-75" />
      <button onClick={goToNextSlide} className="btn btn-primary">Next</button>
    </div>
  );
};

export default ManualSlideshow;
