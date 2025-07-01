import React from "react";
import { Link } from "react-router-dom";

function CartCheckout(props) {
  const totalItems = props.cart.quantity || 0;

  let subTotalPrice = 0;
  props.cart.cartItems.map((item) => {
    subTotalPrice += item.item.price * item.itemQuantity;
  });
  subTotalPrice = subTotalPrice.toFixed(2);

  const tax = (subTotalPrice * 0.13).toFixed(2);
  const totalPrice = (+subTotalPrice + +tax).toFixed(2);

  return (
    <div className="cart-checkout-wrapper">
      <div className="cart-checkout-items-count">{totalItems} Items</div>
      <div className="cart-checkout-price">
        <div>Subtotal</div>
        <div>${subTotalPrice}</div>
      </div>
      <div className="cart-checkout-price">
        <div>Tax</div>
        <div>${tax}</div>
      </div>
      <div className="cart-checkout-price cart-checkout-total">
        <div>Total</div>
        <div>${totalPrice}</div>
      </div>
      <div className="cart-checkout-btn-wrapper">
        <Link to="/checkout">
          <button className="cart-checkout-btn">Checkout</button>
        </Link>
      </div>
    </div>
  );
}

export default CartCheckout;
