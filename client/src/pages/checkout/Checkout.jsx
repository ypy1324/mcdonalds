import React from "react";
import "./Checkout.css";
import OrderType from "./OrderType";
import PaymentDetails from "./PaymentDetails";
import UseRewardsPoints from "./UseRewardsPoints";
import OrderSummary from "./OrderSummary";

function Checkout() {
  return (
    <div className="checkout-wrapper">
      <div>
        <OrderType />
        <PaymentDetails />
        <UseRewardsPoints />
      </div>
      <OrderSummary />
    </div>
  );
}

export default Checkout;
