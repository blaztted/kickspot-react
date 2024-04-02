import React, { useContext } from "react";
import "./CSS/Shop.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../components/assets/images/icons/dropdown_icon.png";
import Item from "../components/Item/Item";
import ProductsData from "../components/assets/ProductsData";
//import banner from "../components/assets/images/background/air-force.jpg";

export const Shop = (props) => {
  const { productsData } = useContext(ShopContext);
  return (
    <div className="shop">
      <div className="banner"></div>
      <div className="shop-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shop-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shop-products">
        {ProductsData.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              brand={item.brand}
              model={item.model}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
      <div className="shop-loadmore">Explore more</div>
    </div>
  );
};

export default Shop;
