import PetShopLogo from '../../assets/images/the-pet-shop-logo.png';
import { ImSearch } from 'react-icons/im';
import Navbar from "./Navbar";
import "./Root.css";
import Footer from "../Footer/Footer";
import { useState } from 'react';
import { RxDropdownMenu } from "react-icons/rx";
import dogs from "../../assets/data/dog.json";
import cats from "../../assets/data/cat.json";
import dogItem from "../../assets/data/dogItem.json";
import catItem from "../../assets/data/catItem.json";

const Header = (props) => {
  const petDogs = dogs;
  const petCats = cats;
  const varDogItem = dogItem;
  const varCatItem = catItem;
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isClickProduct, setIsClickProduct] = useState("none");

  return (
    <>
      <div className='navigation'>
        <div className='nav-left'>
          <div className='logo'>
            <img src={PetShopLogo} alt="" />
          </div>
          <div className='nav-search'>
            <ImSearch className='icon-search' />
            <input type="text" placeholder='Tìm kiếm thức ăn, thú cưng,...' />
          </div>
        </div>
        <div className='nav-right'>
          <div className='nav-right-item'>
            <h4>09xxxxxxx</h4>
            <p>Hotline bán hàng</p>
          </div>
          <div className='nav-right-item'>
            <h4>MUA HÀNG</h4>
            <p>Thời gian 8h00 - 21h30</p>
          </div>
          <div className='nav-right-item'>
            <h4>GIAO HÀNG TOÀN QUỐC</h4>
            <p>Nhận hàng 2 - 4 ngày</p>
          </div>
        </div>
        <button className="nav-mobile" onClick={() => setIsNavExpanded(!isNavExpanded)}>
          <RxDropdownMenu />
        </button>
      </div>
      <Navbar isNavExpanded={isNavExpanded} petDogs={petDogs} petCats={petCats} varDogItem={varDogItem} varCatItem={varCatItem} isClickProduct={isClickProduct} setIsClickProduct={setIsClickProduct}/>
      <Footer />
    </>
  );
}

export default Header;

