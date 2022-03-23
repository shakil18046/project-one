import React from "react";
import "./Product.css";
const Product = (props) => {
  const { productHandle, product } = props;
  const { name, price, img, seller, ratings } = product;

  return (
    <div className="product">
      <img src={img} alt=""></img>
      <div className="product_info">
        <h2 className="product_name">{name}</h2>
        <p>${price}</p>
        <p>
          <small>seller: {seller}</small>
        </p>
        <p>ratings: {ratings} star</p>
        <button onClick={() => productHandle(product)} className="btn_cart">
          <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
};

export default Product;
