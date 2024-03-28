import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/images/logos/jordandraw.png";
import cart_icon from "../assets/images/icons/shopping-cart.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        {/* <p>KICKSPOT</p> */}
      </div>
      <ul className="nav-menu">
        <li
          className={menu === "home" ? "active" : ""}
          onClick={() => {
            setMenu("home");
          }}
        >
          Home
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          className={menu === "shop" ? "active" : ""}
          onClick={() => {
            setMenu("shop");
          }}
        >
          Loja {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          className={menu === "blog" ? "active" : ""}
          onClick={() => {
            setMenu("blog");
          }}
        >
          Blog {menu === "blog" ? <hr /> : <></>}
        </li>
        <li
          className={menu === "contacts" ? "active" : ""}
          onClick={() => {
            setMenu("contacts");
          }}
        >
          Contacts {menu === "contacts" ? <hr /> : <></>}
        </li>
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
