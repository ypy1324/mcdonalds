import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function OrderSummary(props) {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  let subTotalPrice = 0;
  cart.cartItems.map((item) => {
    subTotalPrice += item.item.price * item.itemQuantity;
  });
  subTotalPrice = subTotalPrice.toFixed(2);

  const usingRewardsPoints = (user.rewardPoints / 100).toFixed(2);
  const subTotalPriceWithPoints = (subTotalPrice - usingRewardsPoints).toFixed(
    2
  );
  const taxWithPoints = (subTotalPriceWithPoints * 0.13).toFixed(2);
  const tax = (subTotalPrice * 0.13).toFixed(2);
  const totalPriceWithPoints = (
    +subTotalPriceWithPoints + +taxWithPoints
  ).toFixed(2);
  const totalPrice = (+subTotalPrice + +tax).toFixed(2);
  const addRewardsPoints = Math.floor(subTotalPrice * 10);

  const dataToPass = props.useRewardsPoints
    ? {
        subTotalPrice: subTotalPrice,
        usingRewardsPoints: usingRewardsPoints,
        useRewardsPoints: props.useRewardsPoints,
        subTotalPriceWithPoints: subTotalPriceWithPoints,
        taxWithPoints: taxWithPoints,
        totalPriceWithPoints: totalPriceWithPoints,
      }
    : {
        useRewardsPoints: props.useRewardsPoints,
        subTotalPrice: subTotalPrice,
        tax: tax,
        totalPrice: totalPrice,
      };

  // const dataToPass = {
  //   subTotalPrice: subTotalPrice,
  //   usingRewardsPoints: usingRewardsPoints,
  //   useRewardsPoints: props.useRewardsPoints,
  //   subTotalPriceWithPoints: subTotalPriceWithPoints,
  //   taxWithPoints: taxWithPoints,
  //   totalPriceWithPoints: totalPriceWithPoints,
  //   addRewardsPoints: addRewardsPoints,
  //   tax: tax,
  //   totalPrice: totalPrice,
  // };

  return (
    <div className="order-summary-wrapper">
      <div className="summary-header">Order Summary</div>
      <hr className="summary-divider" />
      <div className="summary-item-quantity">{cart.quantity} Items</div>
      {cart.cartItems.map((cartItem, i) => {
        return (
          <div className="summary-item" key={i}>
            <div>{cartItem.itemQuantity}</div>
            <div>{cartItem.item.name}</div>
            <div>${cartItem.item.price * cartItem.itemQuantity}</div>
          </div>
        );
      })}
      <hr className="summary-divider" />
      {props.useRewardsPoints ? (
        <div>
          <div className="summary-price">
            <div>Subtotal</div>
            <div>${subTotalPrice}</div>
          </div>
          <div className="summary-price">
            <div></div>
            <div>-${usingRewardsPoints}</div>
          </div>
          <div className="summary-price">
            <div>Using Rewards Points</div>
            <div>${subTotalPriceWithPoints}</div>
          </div>
          <div className="summary-price">
            <div>Tax</div>
            <div>${taxWithPoints}</div>
          </div>
          <div className="summary-price summary-total">
            <div>Total</div>
            <div>${totalPriceWithPoints}</div>
          </div>
        </div>
      ) : (
        <div>
          <div className="summary-price">
            <div>Subtotal</div>
            <div>${subTotalPrice}</div>
          </div>
          <div className="summary-price">
            <div>Tax</div>
            <div>${tax}</div>
          </div>
          <div className="summary-price summary-total">
            <div>Total</div>
            <div>${totalPrice}</div>
          </div>
        </div>
      )}
      <hr className="summary-divider" />
      <div className="summary-price add-rewards-points">
        <div>Rewards Points</div>
        <div>+{addRewardsPoints} points</div>
      </div>
      <div className="place-order-wrapper">
        <Link to="/checkout/success" state={dataToPass}>
          <button className="place-order-btn">Place Order</button>
        </Link>
      </div>
    </div>
  );
}

export default OrderSummary;
