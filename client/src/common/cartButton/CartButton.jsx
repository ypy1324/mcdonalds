import React from "react";
import { Link } from "react-router-dom";
import { RiShoppingBasketLine } from "react-icons/ri";
import "./CartButton.css";

function CartButton() {
  return (
    <Link to="/mycart" className="cart-button">
      <RiShoppingBasketLine />
    </Link>
  );
}

export default CartButton;
