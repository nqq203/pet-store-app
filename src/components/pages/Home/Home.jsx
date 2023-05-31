import Intro from "../../Intro/Intro";
import Slideshow from "../../Slideshow/Slideshow";
import "./Home.css";
import { Link } from "react-router-dom";


const Home = (props) => {
  const { petDogs, petCats, dogItem, catItem } = props;
  const typeOfPet = [petDogs, petCats];

  let index = 0;
  const varDogItem = dogItem.filter((item) => {
    return index++ <= 7 ? item : 0;
  });
  index = 0;
  const varCatItem = catItem.filter((item) => {
    return index++ <= 7 ? item : 0;
  });
  const typeOfItem = varDogItem.concat(varCatItem);


  return (
    <div className="home-page">
      <div className="head-content">
        <h1>The Pet Shop - Cửa hàng thú cưng, phụ kiện cho thú cưng</h1>
        <Intro />
      </div>
      <div className="middle-content">
        <div className="dog-content">
          <h2 className="title">GIỐNG CHÓ CẢNH</h2>
          <Slideshow type={typeOfPet} nameType={"dog"} />
        </div>
        <div className="cat-content">
          <h2 className="title">GIỐNG MÈO CẢNH</h2>
          <Slideshow type={typeOfPet} nameType={"cat"} />
        </div>
        <div className="accessory-content">
          <h2 className="title">PHỤ KIỆN CHO CHÓ, MÈO</h2>
          <div className="accessory">
            {typeOfItem.map((item) => (
              <Link to="/pay" key={item.id} className="accessory-item">
                <img src={item.photoUrls} alt="" />
                <h3>{item.name}</h3>
              </Link>
            ))}
          </div>
        </div>
        <div className="about-us-content">
          <h2 className="title">VỀ CHÚNG TÔI</h2>
          <p>THE PET SHOP là một trong những đơn vị đầu tiên tại Việt Nam xây dựng thành công hệ sinh thái liên kết khép kín gồm trang trại chó mèo cảnh, cửa hàng thức ăn và phụ kiện thú cưng, phòng khám thú y, spa chó mèo,… Với các cơ sở đặt tại Hà Nội, Tphcm & Đà Lạt.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
