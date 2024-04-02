import React, { createContext } from "react";
import ProductsData from "../components/assets/ProductsData";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { ProductsData };

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
