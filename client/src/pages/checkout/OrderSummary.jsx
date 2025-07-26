import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../reducer/userSlice";
import axios from "axios";

function OrderSummary(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  let subTotalPrice = 0;
  cart.cartItems.map((item) => {
    subTotalPrice += item.item.price * item.itemQuantity;
  });
  subTotalPrice = subTotalPrice.toFixed(2);

  const rewardsPoints = props.rewardsPoints;
  const rewardsPointsPrice = (rewardsPoints / 100).toFixed(2);
  const subTotalPriceWithPoints = (subTotalPrice - rewardsPointsPrice).toFixed(2);
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
        rewardsPointsPrice: rewardsPointsPrice,
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

  const rewardsPointsHandler = () => {
    let body = {
      uid: user.uid,
      usePoints: props.useRewardsPoints ? rewardsPoints : 0,
      addPoints: addRewardsPoints,
    };
    axios
      .post("/api/cart/addRewardsPoints", body)
      .then((res) => {
        if (res.data.success) {
          dispatch(
            updateUser({
              rewardPoints:
                user.rewardPoints + addRewardsPoints - rewardsPoints,
            })
          );
          console.log("Rewards points updated successfully");
        } else {
          console.log("Failed to update rewards points");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            <div>-${rewardsPointsPrice}</div>
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
          <button
            className="place-order-btn"
            onClick={() => rewardsPointsHandler()}
          >
            Place Order
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OrderSummary;
