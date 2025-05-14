import React from "react";
import { Link } from "react-router-dom";

function CartCheckout() {
  return (
    <div className="cart-checkout-wrapper">
      <div className="cart-checkout-items-count">2 Items</div>
      <div className="cart-checkout-price">
        <div>Subtotal</div>
        <div>$24.46</div>
      </div>
      <div className="cart-checkout-price">
        <div>Tax</div>
        <div>$2.76</div>
      </div>
      <div className="cart-checkout-price cart-checkout-total">
        <div>Total</div>
        <div>$98.51</div>
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
