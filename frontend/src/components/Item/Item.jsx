import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

export const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>
      <div class="des">
        <span>{props.brand}</span>
        <h5>{props.model}</h5>
      </div>
      <h4>{props.price}€</h4>
    </div>
  );
};

export default Item;
