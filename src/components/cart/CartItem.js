import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import "./CartItem.css";

function CartItem({ id, img, price, name, totalPrice, quantity }) {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart({ id, name, img, price }));
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <div className="cart-item-container">
      <img className="cart-item-container__img" src={img} alt=""></img>
      <div className="cart-item-container__info-container">
        <p className="cart-item-container__name">{name}</p>
        <p className="cart-item-container__total">${totalPrice}</p>
        <p className="cart-item-container__quantity">x{quantity}</p>
        <div className="cart-item-container__button-container">
          <button
            className="cart-item-container__remove"
            onClick={removeItemHandler}
          >
            -
          </button>
          <button className="cart-item-container__add" onClick={addItemHandler}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
