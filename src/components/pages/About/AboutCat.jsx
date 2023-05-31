import {Link} from "react-router-dom";
import "./About.css";

const AboutCat = (props) => {
  const catItem = props.varCatItem;
  const setIsClickProduct = props.setIsClickProduct;

  return(
    <div className="about-cat-page">
      <h2>Vật dụng cho chó</h2>
      <Link to="/pay" className="about-cat-container">
        {catItem.map((item) => (
          <div key={item.id} className="about-cat-item" onClick={() => setIsClickProduct(item.id)} >
            <img src={item.photoUrls} alt="" />
            <h3>{item.name}</h3>
          </div> 
        ))};
      </Link>
    </div> 
  );
}

export default AboutCat;