import React, { useState } from "react";
import OrderType from "./OrderType";
import PaymentDetails from "./PaymentDetails";
import UseRewardsPoints from "./UseRewardsPoints";
import OrderSummary from "./OrderSummary";
import "./Checkout.css";

function Checkout() {
  const [useRewardsPoints, setUseRewardsPoints] = useState(false);
  const [rewardsPoints, setRewardsPoints] = useState(0);

  return (
    <div>
      <div className="checkout-header">Checkout</div>
      <div className="checkout-content">
        <div>
          <OrderType />
          <PaymentDetails />
          <UseRewardsPoints
            useRewardsPoints={useRewardsPoints}
            setUseRewardsPoints={setUseRewardsPoints}
            rewardsPoints={rewardsPoints}
            setRewardsPoints={setRewardsPoints}
          />
        </div>
        <OrderSummary
          useRewardsPoints={useRewardsPoints}
          rewardsPoints={rewardsPoints}
        />
      </div>
    </div>
  );
}

export default Checkout;
