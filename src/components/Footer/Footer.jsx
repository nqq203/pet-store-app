import logo from "../../assets/images/the-pet-shop-logo.png"
import { useState } from "react";
import "./Footer.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  const [input, setInput] = useState("")
	
	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(input)
		setInput("")
	}

	const handleInputChange = (event) => {
		setInput(event.target.value);
	}
  
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="" />
        <h3>Cửa hàng thú cưng uy tín hàng đầu</h3>
      </div>
      <div className="footer-right">
        <div className="footer-right-item">
          <h6>Bạn cần hỗ trợ</h6>
          <p className="phone-number">1900 0675</p>
          <p>Địa chỉ: 70, Lữ Gia, Quận 11, TP HCM</p>
          <p>Email: support@petshop.vn</p>
          <div className="contact">
            <button className="contact-button">
              <BsFacebook />
            </button>
            <button className="contact-button">
              <BsInstagram />
            </button>
          </div>
        </div>
        <div className="footer-right-item">
          <h6>Để lại thông tin</h6>
          <form onSubmit={handleSubmit} className="form">
            <input type="text" value={input} onChange={handleInputChange} placeholder="Nhập email hoặc số điện thoại"/>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;