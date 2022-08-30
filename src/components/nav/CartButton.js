import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { uiActions } from "../../store/ui-slice";
import "./CartButton.css";

function CartButton(props) {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <div>
      <button onClick={toggleCartHandler} className="navbar__cart-btn">
        <FaShoppingCart className="navbar__icon" />
        <p className="navbar__button-para">
          <span className="navbar__num-items">{cartQuantity}</span>
        </p>
      </button>
    </div>
  );
}

export default CartButton;
