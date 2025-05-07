import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Button from "../../common/button/Button";
import { Link } from "react-router-dom";

function CheckoutSuccess() {
  return (
    <div className="checkout-success-wrapper">
      <IoIosCheckmarkCircleOutline size="5rem" />
      <div className="checkout-success-text">
        <div>Order confirmed!</div>
        <div>Your order has been placed successfully</div>
      </div>
      <hr className="checkout-success-divider" />
      <div className="checkout-order-details-header">Order Details</div>
      <div className="checkout-order-details">
        <div>1</div>
        <div>Egg McMuffin</div>
        <div>$6.99</div>
      </div>
      <div className="checkout-order-details">
        <div>1</div>
        <div>Egg McMuffin</div>
        <div>$6.99</div>
      </div>
      <div className="checkout-order-details checkout-subtotal-price">
        <div>Subtotal</div>
        <div>$13.98</div>
      </div>
      <div className="checkout-order-details">
        <div>Tax</div>
        <div>$1.57</div>
      </div>
      <div className="checkout-order-details checkout-total-price">
        <div>Total</div>
        <div>$15.54</div>
      </div>
      <hr className="checkout-success-divider" />
      <Link to="/">
        <Button button="Continue" />
      </Link>
    </div>
  );
}

export default CheckoutSuccess;
