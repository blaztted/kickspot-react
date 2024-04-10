import React from "react";
import "./RelatedProducts.css";
import ProductsData from "..//assets/ProductsData";
import Item from "../Item/Item";

const RelatedProducts = () => {
  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {ProductsData.slice(0, 4).map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              brand={item.brand}
              model={item.model}
              image={item.image}
              price={item.price}
              relatedProduct={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
