import React from "react";
import OrderType from "./OrderType";
import PaymentDetails from "./PaymentDetails";
import UseRewardsPoints from "./UseRewardsPoints";
import OrderSummary from "./OrderSummary";
import "./Checkout.css";

function Checkout() {
  return (
    <div>
      <div className="checkout-header">Checkout</div>
      <div className="checkout-content">
        <div>
          <OrderType />
          <PaymentDetails />
          <UseRewardsPoints />
        </div>
        <OrderSummary />
      </div>
    </div>
  );
}

export default Checkout;
