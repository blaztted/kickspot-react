import React from "react";
import "./Hero.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Hero = () => {
  return (
    <div className="hero">
      <h2>Super exclusivos</h2>
      <h1>Sneakers de sonho</h1>

      <a href="shop.html">
        <button type="button" class="btn btn-light">
          Compra agora
        </button>
      </a>
    </div>
  );
};

export default Hero;
