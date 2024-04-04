import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../assets/images/icons/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{" "}
      {`${product.brand} ${product.model} `}
    </div>
  );
};

export default Breadcrum;
