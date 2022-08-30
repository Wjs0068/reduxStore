import React from "react";
import Search from "./Search";
import DUMMY_PRODUCT from "../../data";
import ProductItem from "./ProductItem";
import "./Products.css";

function Products() {
  return (
    <div className="products-container">
      <h1 className="header-one">
        Our <span class="store">Store</span>
      </h1>
      <Search />
      <ul className="items-container">
        {DUMMY_PRODUCT.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            img={product.img}
            price={product.price}
          />
        ))}
      </ul>
    </div>
  );
}

export default Products;
