import React from "react";
import "./ProductDisplay.css";

const ProductDisplay = (props) => {
  const { product } = props;

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.brand}</h1>
        <h2>{product.model}</h2>

        <div className="productdisplay-right-price">{product.price}€</div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>40</div>
            <div>41</div>
            <div>42</div>
            <div>43</div>
            <div>44</div>
            <div>45</div>
          </div>
        </div>
        <button>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductDisplay;
