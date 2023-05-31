import {Link} from "react-router-dom";
import "./About.css";

const AboutDog = (props) => {
  const dogItem = props.varDogItem;
  const setIsClickProduct = props.setIsClickProduct;

  return(
    <div className="about-dog-page">
      <h2>Vật dụng cho chó</h2>
      <Link to="/pay" className="about-dog-container">
        {dogItem.map((item) => (
          <div key={item.id} className="about-dog-item" onClick={() => setIsClickProduct(item.id)}>
            <img src={item.photoUrls} alt="" />
            <h3>{item.name}</h3>
          </div> 
        ))};
      </Link>
    </div> 
  );
}

export default AboutDog;