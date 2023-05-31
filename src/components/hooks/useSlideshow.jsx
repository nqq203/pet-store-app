import { useState, useEffect } from "react";

export function useSlideshow(images, names, keys) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const size = images.length;

  useEffect(() => {
    // This effect creates an interval that changes the slide every 3 seconds
    const interval = setInterval(() => {
      handleNextClick();
    }, 3000);

    // This cleans up the interval when the component unmounts
    return () => clearInterval(interval);
  });

  const handleNextClick = () => {
    setCurrentIndex ((current) => {
      return current === size - 1 ? 0 : current + 1;
    })
  };

  const handlePrevClick = () => {
    setCurrentIndex ((current) => {
      return current === 0 ? size - 1 : current - 1;
    })
  };

  
  
  const currentImage = [
    images[currentIndex - 2] || images[size - 2],
    images[currentIndex - 1] || images[size - 1],
    images[currentIndex],
    images[currentIndex + 1] || images[currentIndex - size + 1],
    images[currentIndex + 2] || images[currentIndex - size +  2],
  ];

  const currentName = [
    names[currentIndex - 2] || names[size - 2],
    names[currentIndex - 1] || names[size - 1],
    names[currentIndex],
    names[currentIndex + 1] || names[currentIndex - size + 1],
    names[currentIndex + 2] || names[currentIndex - size + 2]
  ];

  const currentKey = [
    keys[currentIndex - 2] || keys[size - 2],
    keys[currentIndex - 1] || keys[size - 1],
    keys[currentIndex],
    keys[currentIndex + 1] || keys[currentIndex - size + 1],
    keys[currentIndex + 2] || keys[currentIndex - size + 2]
  ]

  return [currentImage, currentName, currentKey , handlePrevClick, handleNextClick];
};  
