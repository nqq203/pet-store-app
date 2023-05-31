import "./Pet.css";
import { Link } from "react-router-dom";

const Cat = (props) => {
  const petCat = props.petCats;  
  const setIsClickProduct = props.setIsClickProduct;

  
  return (
    <div className="cat-page">
      <h2>Giống mèo cảnh</h2>
      <Link to="/pay" className="cat-container">
        {petCat.map((item) => (
          <div key={item.id} className="cat-item" onClick={() => setIsClickProduct(item.id)}>
            <img src={item.photoUrls} alt="" />
            <h3>{item.name}</h3>
          </div>
        ))};
      </Link>
    </div>
  );
}

export default Cat;