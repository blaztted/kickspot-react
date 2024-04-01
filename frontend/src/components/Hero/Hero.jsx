import React from "react";
import "./Hero.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Hero = () => {
  return (
    <div className="hero">
      <h2>Nem consegues acreditar...</h2>
      <h1>Sneakers exclusivos</h1>

      <a href="shop.html">
        <button type="button" className="btn btn-light">
          Compra agora
        </button>
      </a>
    </div>
  );
};

export default Hero;
