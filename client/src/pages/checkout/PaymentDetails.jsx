import React, { useState } from "react";
import Input from "../../common/input/Input";

function PaymentDetails() {
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zipCode, setZipCode] = useState("");

  return (
    <div className="payment-details-wrapper">
      <div className="payment-details">
        <div className="payment-details-header">Credit Card Details</div>
        <Input
          input="Name on card"
          type="text"
          setValue={setNameOnCard}
          value={nameOnCard}
        />
        <Input
          input="Card number"
          type="number"
          setValue={setCardNumber}
          value={cardNumber}
        />
        <Input
          input="MM / YY"
          type="text"
          setValue={setExpiryDate}
          value={expiryDate}
        />
        <Input input="CVV" type="number" setValue={setCvv} value={cvv} />
      </div>
      <div className="payment-details">
        <div className="payment-details-header">Billing Address</div>
        <Input input="Street" type="text" setValue={setStreet} value={street} />
        <Input input="City" type="text" setValue={setCity} value={city} />
        <Input
          input="Province"
          type="text"
          setValue={setProvince}
          value={province}
        />
        <Input
          input="Zip code"
          type="text"
          setValue={setZipCode}
          value={zipCode}
        />
      </div>
    </div>
  );
}

export default PaymentDetails;
