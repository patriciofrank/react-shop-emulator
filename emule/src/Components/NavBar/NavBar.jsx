import "./NavBar.css"
import { CartWidgets } from "../CartWidgets/CartWidgets";
import { Link } from "react-router-dom";

export const NavBar =()=> {
    return (
      <div className="nav">
        <div>
          <Link to='/'><img className="logo" src="https://play-lh.googleusercontent.com/EnxJKkoXzxrmA0RA0gUie0K4gvbRLrQhpflyMzwSMvCfk2FA6o9sBLzfWtG5qLzIBIc" alt="Logo Shop Emule" /></Link>
          <p>Shop Emule</p>
        </div>  
              <ul className="nav_list">
                  <li><Link to='/' >Products</Link></li>
                  <li><Link to='/category/Notebook' >Notebooks</Link></li>
                  <li><Link to='/category/Netbook' >Netbooks</Link></li>
                  <li><Link to='/category/Tablet' >Tablets</Link></li>
              </ul>
          <CartWidgets/>
      </div>
    );
  }