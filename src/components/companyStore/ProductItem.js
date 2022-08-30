import React from "react";
import "./ProductItem.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

function ProductItem({ id, price, name, img }) {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
        img,
      })
    );
  };
  return (
    <button
      onClick={addToCartHandler}
      className="item-container cookie"
      data-item="cookie"
    >
      <img src={img} alt="" className="item-img" />
      <div className="description-container">
        <p className="item-name">{name}</p>
        <p className="item-cost">{price}</p>
      </div>
    </button>
  );
}

export default ProductItem;
