import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../assets/images/icons/remove_icon.png";

const CartItems = () => {
  const { ProductsData, cartItems, remFromCart } = useContext(ShopContext);
  console.log(cartItems);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {ProductsData.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.brand + e.model}</p>
                <p>€{e.price}</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>€{e.price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  alt=""
                  className="carticon-remove-icon"
                  onClick={() => {
                    remFromCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
      })}
    </div>
  );
};

export default CartItems;
