import React from "react";
import CartList from "./CartList";
import CartCheckout from "./CartCheckout";
import { useSelector } from "react-redux";
import "./MyCart.css";

function MyCart() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="mycart-wrapper">
      <div className="mycart-header">My Cart</div>
      {cart.quantity === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <div className="mycart-content">
          <CartList cartItems={cart.cartItems} />
          <CartCheckout cart={cart} />
        </div>
      )}
    </div>
  );
}

export default MyCart;
