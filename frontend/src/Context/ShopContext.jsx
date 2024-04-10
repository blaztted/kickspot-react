import React, { createContext, useState } from "react";
import ProductsData from "../components/assets/ProductsData";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < ProductsData.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
      console.log(updatedCart); // Log the updated cart here
      return updatedCart;
    });
  };
  const remFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
      console.log(updatedCart);
      return updatedCart;
    });
  };

  const contextValue = { ProductsData, cartItems, addToCart, remFromCart };
  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
