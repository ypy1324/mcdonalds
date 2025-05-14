import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaHamburger } from "react-icons/fa";

function OrderType() {
  return (
    <div>
      <div className="order-type-header">
        How would you like to receive your order?
      </div>
      <div className="order-type-options">
        <div className="order-type-option">
          <CiDeliveryTruck className="order-type-icon" />
          Delivery
        </div>
        <div className="order-type-option">
          <FaHamburger className="order-type-icon" />
          Carry Out
        </div>
      </div>
      <div className="delivery-address">
        <div>Delivering to</div>
        <div>2221 Yonge St</div>
        <div>Not the right address?</div>
        <div>Change</div>
      </div>
    </div>
  );
}

export default OrderType;
