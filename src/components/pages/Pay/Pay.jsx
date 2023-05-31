import "./Pay.css";
import { useState } from "react";

const Pay = (props) => {
  const {petCats, petDogs, varCatItem, varDogItem, isClickProduct} = props;
  
  let show = petCats.concat(petDogs);
  show = show.concat(varCatItem);
  show = show.concat(varDogItem);
  
  const showPay = show.filter((item) => {
    return isClickProduct === item.id ? item : null;
  })

  const [input, setInput] = useState("")
	const [input1, setInPut1] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault()
    console.log(input);
    console.log(input1);
		setInput("")
    setInPut1("");
	}

	const handleInputChange = (event) => {
		setInput(event.target.value);
    
	}

  const handleInputChange1 = (event) => {
    setInPut1(event.target.value);
  }



  const data = {
    name: `${input1}`,
    infor: `${input}`
  }

  return(
    <div className="paying-page">
      <div className="product">
        <h3>{showPay[0].name}</h3>
        <img src={showPay[0].photoUrls} alt="" />
      </div>
      <div className="status">
        <p>Giá: {showPay[0].price}</p>
        <p>Số lượng: {showPay[0].amount}</p>
        <h4>Để lại thông tin</h4>
        <form onSubmit={handleSubmit} className="form">
          <input type="text" value={input} onChange={handleInputChange} placeholder="Nhập email hoặc số điện thoại"/>
          <input type="text" value={input1} onChange={handleInputChange1} placeholder="Nhập họ tên"/>
          <button type="submit" >Submit</button>
        </form>
      </div>
      
      
    </div>
    
  );
}

export default Pay;