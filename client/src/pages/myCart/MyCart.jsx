import React from "react";
import CartList from "./CartList";
import CartCheckout from "./CartCheckout";
import "./MyCart.css";

function MyCart() {
  return (
    <div className="mycart-wrapper">
      <div className="mycart-header">MyCart</div>
      <div className="mycart-content">
        <CartList />
        <CartCheckout />
      </div>
    </div>
  );
}

export default MyCart;
