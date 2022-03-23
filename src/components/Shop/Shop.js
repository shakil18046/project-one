import React, { useState, useEffect } from "react";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [Products, setProducts] = useState([]);
  const [Cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const productHandle = (Products) => {
    const newProduct = [...Cart, Products];
    setCart(newProduct);
  };
  return (
    <div className="shop_container">
      <div className="product_container">
        {Products.map((product) => (
          <Product
            productHandle={productHandle}
            key={product.id}
            product={product}
          ></Product>
        ))}
      </div>
      <div className="cart_container">
        <h3>this is cart{Cart.length}</h3>
      </div>
    </div>
  );
};

export default Shop;
