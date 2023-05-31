import "./Pet.css";
import { Link } from "react-router-dom";

const Dog = (props) => {
  const petDog = props.petDog;  
  const setIsClickProduct = props.setIsClickProduct;

  return (
    <div className="dog-page">
      <h2>Giống chó cảnh</h2>
      <Link to="/pay" className="dog-container">
        {petDog.map((item) => (
          <div key={item.id} className="dog-item" onClick={() => setIsClickProduct(item.id)}>
            <img src={item.photoUrls} alt="" />
            <h3>{item.name}</h3>
          </div>
        ))};
      </Link>
    </div> 
  );
}

export default Dog;