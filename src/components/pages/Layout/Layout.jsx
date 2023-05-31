import { Outlet, Link } from "react-router-dom";
import {BsFillCartCheckFill} from "react-icons/bs";

const Layout = (props) => {
  const isNavExpanded = props;
  let expanded = isNavExpanded.isNavExpanded;
  return (
    <>
      <nav className={expanded ? "navbar-container expanded" : "navbar-container"}>
        <ul className="navbar-list">
          <li>
            <Link to="/" className="navbar-item">TRANG CHỦ</Link>
          </li>
          <li>
            <Link to="/about-cat" className="navbar-item">SHOP CHO MÈO</Link>
          </li>
          <li>
            <Link to="/about-dog" className="navbar-item">SHOP CHO CHÓ</Link>
          </li>
          <li>
            <Link to="/cat" className="navbar-item">MÈO</Link>
          </li>
          <li>
            <Link to="/dog" className="navbar-item">CHÓ</Link>
          </li>
          {/* <li>
            <Link to="/cart" className="navbar-item cart-item"><BsFillCartCheckFill /></Link>
          </li> */}
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;