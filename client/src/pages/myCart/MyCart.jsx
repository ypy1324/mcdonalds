import React from "react";
import ItemsList from "./ItemsList";
import ItemsCheckout from "./ItemsCheckout";
import "./MyCart.css";

function MyCart() {
  return (
    <div className="mycart-wrapper">
      <div className="mycart-header">MyCart</div>
      <div className="mycart-content">
        <ItemsList />
        <ItemsCheckout />
      </div>
    </div>
  );
}

export default MyCart;
