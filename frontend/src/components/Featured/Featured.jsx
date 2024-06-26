import React from "react";
import "./Featured.css";
import { productsData } from "../assets/ProductsData";
import Item from "../Item/Item";

export const Featured = () => {
  return (
    <div className="featured">
      <h1>Featured Products</h1>
      <hr />

      <div className="featured-item">
        {productsData.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              brand={item.brand}
              model={item.model}
              image={item.image}
              price={item.price}
              // old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
