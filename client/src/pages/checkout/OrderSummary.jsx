import React from "react";
import { Link } from "react-router-dom";

function OrderSummary() {
  return (
    <div className="order-summary-wrapper">
      <div className="summary-header">Order Summary</div>
      <hr className="summary-divider" />
      <div className="summary-item-quantity">2 Items</div>
      <div className="summary-item">
        <div>1</div>
        <div>Egg McMuffin</div>
        <div>$6.99</div>
      </div>
      <div className="summary-item">
        <div>1</div>
        <div>Egg McMuffin</div>
        <div>$6.99</div>
      </div>
      <hr className="summary-divider" />
      <div className="summary-price">
        <div>Subtotal</div>
        <div>$24.46</div>
      </div>
      <div className="summary-price">
        <div>Tax</div>
        <div>$2.76</div>
      </div>
      <div className="summary-price summary-total">
        <div>Total</div>
        <div>$98.51</div>
      </div>
      <div className="place-order-wrapper">
        <Link to="/checkout/success">
          <button className="place-order-btn">Place Order</button>
        </Link>
      </div>
    </div>
  );
}

export default OrderSummary;
