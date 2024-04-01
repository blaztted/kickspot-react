import React from "react";
import "./Item.css";

export const Item = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <div class="des">
        <span>{props.brand}</span>
        <h5>{props.model}</h5>
      </div>
      <h4>{props.price}€</h4>
    </div>
  );
};

export default Item;
