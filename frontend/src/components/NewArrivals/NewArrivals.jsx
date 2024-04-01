import React from "react";
import "./NewArrivals.css";
import { arrivalsData } from "../assets/ArrivalsData";
import Item from "../Item/Item";

export const NewArrivals = () => {
  return (
    <div className="new-arrivals">
      <h1>New Arrivals</h1>
      <hr />
      <div className="collections-item">
        {arrivalsData.map((item, i) => {
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

export default NewArrivals;
