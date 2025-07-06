import React, { useState } from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaHamburger } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function OrderType() {
  const [orderType, setOrderType] = useState("delivery");

  return (
    <div>
      <div className="order-type-header">
        How would you like to receive your order?
      </div>
      <div className="order-type-options">
        <div
          className={
            orderType === "delivery"
              ? "order-type-option active-order-type"
              : "order-type-option"
          }
          onClick={() => setOrderType("delivery")}
        >
          <CiDeliveryTruck className="order-type-icon" />
          Delivery
        </div>
        <div
          className={
            orderType === "carryout"
              ? "order-type-option active-order-type"
              : "order-type-option"
          }
          onClick={() => setOrderType("carryout")}
        >
          <FaHamburger className="order-type-icon" />
          Carry Out
        </div>
      </div>
      {orderType === "delivery" && (
        <div className="delivery-address">
          <div>Delivering to</div>
          <div>2221 Yonge St</div>
          <div>Not the right address?</div>
          <NavLink className="change-address-btn" to={"/profile/changeAddress"}>
            Change
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default OrderType;
