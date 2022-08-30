import React from "react";
import "./Nav.css";
import CartButton from "./CartButton";
import { FaPhone } from "react-icons/fa";

function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar__left-nav">
        <img
          className="navbar__logo"
          src="https://cdn.worldvectorlogo.com/logos/sweet-house.svg"
          alt="logo of a donut"
        />
        <ul className="navbar__list">
          <li className="navbar__list-item">Home</li>
          <li className="navbar__list-item">About</li>
          <li className="navbar__list-item">Store</li>
        </ul>
      </div>
      <div className="navbar__right-nav">
        <div className="navbar__number-div">
          <FaPhone className="navbar__phone-icon" />
          <p className="navbar__number">903 238 7591</p>
        </div>
        <CartButton />
      </div>
    </nav>
  );
}

export default Nav;
