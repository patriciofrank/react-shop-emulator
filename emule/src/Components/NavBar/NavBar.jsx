import "./NavBar.css";
import { CartWidgets } from "../CartWidgets/CartWidgets";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
export const NavBar = () => {
  return (
    <div className="nav">
      <div>
        <Link to="/">
          <img className="logo" src={logo} alt="Logo Shop Emule" />
        </Link>
        <p>Emule Shop </p>
      </div>
      <ul className="nav_list">
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/category/Notebook">Notebooks</Link>
        </li>
        <li>
          <Link to="/category/Netbook">Netbooks</Link>
        </li>
        <li>
          <Link to="/category/Tablet">Tablets</Link>
        </li>
      </ul>
      <Link to="/cart">
        <CartWidgets />
      </Link>
    </div>
  );
};
