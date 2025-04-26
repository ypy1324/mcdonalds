import React from "react";
import { RiShoppingBasketLine } from "react-icons/ri";
import "./CartButton.css";

function CartButton() {
  return (
    <div className="cart-button">
      <RiShoppingBasketLine className="cart-icon" />
    </div>
  );
}

export default CartButton;
