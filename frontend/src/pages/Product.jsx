import React, { useContext, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrums/Breadcrum";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";

export const Product = () => {
  const { ProductsData } = useContext(ShopContext);
  const { productId } = useParams();
  const product = ProductsData.find((e) => e.id === Number(productId));

  // useEffect(() => {
  //   // Scroll to the top of the page when the component mounts
  //   window.scrollTo(0, 0);
  // }, [productId]); // Scroll to the top whenever productId changes

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
