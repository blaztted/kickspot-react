import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrums/Breadcrum";

export const Product = () => {
  const { ProductsData } = useContext(ShopContext);
  const { productId } = useParams();
  const product = ProductsData.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product} />
    </div>
  );
};

export default Product;
