import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

export const Item = (props) => {
  const className = props.relatedProduct ? "related-item" : "item";
  return (
    <div className={className}>
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>
      <div className="des">
        <span>{props.brand}</span>
        <h5>{props.model}</h5>
      </div>
      <h4>{props.price}€</h4>
    </div>
  );
};

export default Item;
