import "./Intro.css";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const imagesIntro = [
  "images/intro/intro-1.png",
  "images/intro/intro-2.png",
  "images/intro/intro-3.png",
  "images/intro/intro-4.png"
];

const Intro = (props) => {
  const [images, setImages] = useState([
    "images/intro/intro-slider-1.png",
    "images/intro/intro-slider-2.png",
    "images/intro/intro-slider-3.png",
    "images/intro/intro-slider-4.png"
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevState) =>
        prevState === images.length - 1 ? 0 : prevState + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevState) =>
      prevState === images.length - 1 ? 0 : prevState + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevState) =>
      prevState === 0 ? images.length - 1 : prevState - 1
    );
  };

  return (
    <div className="intro">
      <div className="intro-left">
        <div className="slide-item">
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
          />
        </div>
        <a onClick={handlePrevImage} className="btn-prev">
          ❮
        </a>
        <a onClick={handleNextImage} className="btn-next">
          ❯
        </a>
      </div>
      <div className="intro-right">
        {imagesIntro.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Intro;

