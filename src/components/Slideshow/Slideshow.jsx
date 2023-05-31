import "./Slideshow.css";
import { useSlideshow } from "../hooks";
import { Link } from "react-router-dom";

const Slideshow = (props) => {
  const {type, nameType} = props;

  let object;
  if (nameType === "dog") {
    object = type[0];
  }
  else if (nameType === "cat") {
    object = type[1];
  }

  //get database 
  const itemsId = object.map(item => item.id);
  const itemsName = object.map(item => item.name);
  const itemsUrls = object.map(item => item.photoUrls);
  // const itemsGender = object.map(item => item.gender);
  // const itemsStatus = object.map(item => item.status);
  // const itemsPrice = object.map(item => item.price);
  
  const [currentImage, currentName, currentKey, handlePrevClick, handleNextClick] = useSlideshow(itemsUrls, itemsName, itemsId);

  return (
     <div className="slideshow-content">
      <button onClick={handlePrevClick}>❮</button>
      <div key={currentKey[0]} className="slideshow-item">
        <img src={currentImage[0]} alt="Slideshow" />
        <h3>{currentName[0]}</h3>
      </div>
      <div key={currentKey[1]} className="slideshow-item">
        <img src={currentImage[1]} alt="Slideshow" />
        <h3>{currentName[1]}</h3>
      </div>
      <div key={currentKey[2]} className="slideshow-item">
        <img src={currentImage[2]} alt="Slideshow" />
        <h3>{currentName[2]}</h3>
      </div>
      <div key={currentKey[3]} className="slideshow-item">
        <img src={currentImage[3]} alt="Slideshow" />
        <h3>{currentName[3]}</h3>
      </div>
      <div key={currentKey[4]} className="slideshow-item">
        <img src={currentImage[4]} alt="Slideshow" />
        <h3>{currentName[4]}</h3>
      </div>
      <button onClick={handleNextClick}>❯</button>
    </div>
  );
};

export default Slideshow;