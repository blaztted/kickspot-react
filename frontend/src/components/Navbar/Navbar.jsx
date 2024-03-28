import React from "react";
import "./Navbar.css";
import logo from "../assets/images/logos/snake-logo.png";
import cart_icon from "../assets/images/icons/shopping-cart.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>KICKSPOT</p>
      </div>
      <ul className="nav-menu">
        <li>
          Home
          <hr />
        </li>
        <li>Loja</li>
        <li>Blog</li>
        <li>Contacts</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
