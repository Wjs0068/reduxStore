import React from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import "./Cart.css";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const showCart = useSelector((state) => state.ui.cartVisible);

  if (cartItems.length === 0 && showCart) {
    dispatch(uiActions.toggleCart());
  }
  return (
    <>
      {showCart && (
        <div className="cart-container">
          <h2 className="cart-container__header-two">Your Shopping Cart</h2>
          <div className="cart-container__item-container">
            {cartItems.map((item) => (
              <CartItem
                img={item.img}
                id={item.id}
                name={item.name}
                quantity={item.quantity}
                totalPrice={item.totalPrice.toFixed(2)}
                price={item.price}
              />
            ))}
          </div>
          <div className="checkout-container">
            <p className="checkout-container__price">
              Subtotal: $
              {(
                cartItems.reduce((prev, curr) => prev + curr.totalPrice, 0) *
                1.08
              ).toFixed(2)}
            </p>
            <button className="checkout-container__btn">Check Out</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
