import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/images/logos/nike.png";
import cart_icon from "../assets/images/icons/shopping-cart.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 0) {
        navbar.classList.add("transparent");
      } else {
        navbar.classList.remove("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar" id="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        {/* <p>KICKSPOT</p> */}
      </div>
      <ul className="nav-menu">
        <li
          className={menu === "home" ? "active" : ""}
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            {" "}
            Home{" "}
          </Link>

          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          className={menu === "shop" ? "active" : ""}
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/Shop">
            {" "}
            Shop{" "}
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          className={menu === "blog" ? "active" : ""}
          onClick={() => {
            setMenu("blog");
          }}
        >
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/Blog">
            Blog
          </Link>{" "}
          {menu === "blog" ? <hr /> : <></>}
        </li>
        <li
          className={menu === "contacts" ? "active" : ""}
          onClick={() => {
            setMenu("contacts");
          }}
        >
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/Contacts">
            Contacts
          </Link>{" "}
          {menu === "contacts" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{ textDecoration: "none", color: "inherit" }} to="/login">
          <button>Login</button>
        </Link>
        <Link style={{ textDecoration: "none", color: "inherit" }} to="/cart">
          {" "}
          <img src={cart_icon} alt="Cart Icon" />
        </Link>

        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
