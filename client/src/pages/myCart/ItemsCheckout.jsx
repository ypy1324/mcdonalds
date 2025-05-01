import React from "react";
import { Link } from "react-router-dom";
import "./MyCart.css";

function ItemsCheckout() {
  return (
    <div className="items-checkout-wrapper">
      <div className="checkout-items-count">2 Items</div>
      <div className="checkout-price">
        <div>Subtotal</div>
        <div>$24.46</div>
      </div>
      <div className="checkout-price">
        <div>Tax</div>
        <div>$2.76</div>
      </div>
      <div className="checkout-price checkout-total">
        <div>Total</div>
        <div>$98.51</div>
      </div>
      <div className="checkout-btn-wrapper">
        <Link to="/checkout">
          <button className="checkout-btn">Checkout</button>
        </Link>
      </div>
    </div>
  );
}

export default ItemsCheckout;
