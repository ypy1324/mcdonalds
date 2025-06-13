import React from "react";
import { Link } from "react-router-dom";
import { RiShoppingBasketLine } from "react-icons/ri";
import "./CartButton.css";

function CartButton() {
  return (
    <Link to="/mycart" className="cart-button">
      <RiShoppingBasketLine />
      <div className="cart-qty">0</div>
    </Link>
  );
}

export default CartButton;
