import React from "react";
import "./Footer.css";
import footer_logo from "../assets/images/logos/low.png";

import insta_icon from "../assets/images/icons/insta.png";
import whatsapp_icon from "../assets/images/icons/whatsapp.png";
import email_icon from "../assets/images/icons/email.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Office</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={insta_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={email_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Bruno Silva, Copyright © 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
