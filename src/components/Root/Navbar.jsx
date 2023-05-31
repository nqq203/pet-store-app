import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home";
import AboutCat from "../pages/About/AboutCat";
import AboutDog from "../pages/About/AboutDog";
import Cat from "../pages/Pet/Cat";
import Dog from "../pages/Pet/Dog";
import NoPage from "../pages/NoPage/NoPage";
import Pay from "../pages/Pay/Pay";
import Cart from "../pages/Cart/Cart";

const Navbar = (props) => {
  const { isNavExpanded, petDogs, petCats, varDogItem, varCatItem, isClickProduct, setIsClickProduct } = props;
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout isNavExpanded={isNavExpanded} />}>
          <Route index element={<Home petDogs={petDogs} petCats={petCats} dogItem={varDogItem} catItem={varCatItem} isClickProduct={isClickProduct} setIsClickProduct={setIsClickProduct}/>} />
          <Route path="about-cat" element={<AboutCat varCatItem={varCatItem} isClickProduct={isClickProduct} setIsClickProduct={setIsClickProduct}/>} />
          <Route path="about-dog" element={<AboutDog varDogItem={varDogItem} isClickProduct={isClickProduct} setIsClickProduct={setIsClickProduct}/>} />
          <Route path="cat" element={<Cat petCats={petCats} isClickProduct={isClickProduct} setIsClickProduct={setIsClickProduct}/>} />
          <Route path="dog" element={<Dog petDog={petDogs} isClickProduct={isClickProduct} setIsClickProduct={setIsClickProduct}/>} />
          <Route path="cart" element={<Cart />} />
          <Route path="pay" element={<Pay petCats={petCats} petDogs={petDogs} varCatItem={varCatItem} varDogItem={varDogItem} isClickProduct={isClickProduct} setIsClickProduct={setIsClickProduct}/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Navbar;
