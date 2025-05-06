import React from "react";
import Input from "../../common/input/Input";

function PaymentDetails() {
  return (
    <div className="payment-details-wrapper">
      <div className="payment-details">
        <div className="payment-details-header">Credit Card Details</div>
        <Input input="Name on card" type="text" />
        <Input input="Card number" type="number" />
        <Input input="MM / YY" type="text" />
        <Input input="CVV" type="number" />
      </div>
      <div className="payment-details">
        <div className="payment-details-header">Billing Address</div>
        <Input input="Street" type="text" />
        <Input input="City" type="text" />
        <Input input="Province" type="text" />
        <Input input="Zip code" type="text" />
      </div>
    </div>
  );
}

export default PaymentDetails;
