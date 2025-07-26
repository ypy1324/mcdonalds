import React, { useEffect } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Button from "../../common/button/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCartInfo } from "../../reducer/cartSlice";
import axios from "axios";
import { useLocation } from "react-router-dom";

function CheckoutSuccess() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  const { state } = useLocation();
  const {
    subTotalPrice,
    rewardsPointsPrice,
    useRewardsPoints,
    subTotalPriceWithPoints,
    taxWithPoints,
    totalPriceWithPoints,
    tax,
    totalPrice,
  } = state || {};

  useEffect(() => {
    return () => {
      let body = { uid: user.uid };
      axios
        .post("/api/cart/clearCart", body)
        .then((res) => {
          if (res.data.success) {
            dispatch(clearCartInfo());
          } else {
            console.log("Failed to clear cart");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }, []);

  return (
    <div className="checkout-success-wrapper">
      <IoIosCheckmarkCircleOutline size="5rem" />
      <div className="checkout-success-text">
        <div>Order confirmed!</div>
        <div>Your order has been placed successfully</div>
      </div>
      <hr className="checkout-success-divider" />
      <div className="checkout-order-details-header">Order Details</div>
      {cart.cartItems.map((cartItem, i) => {
        return (
          <div className="checkout-order-details" key={i}>
            <div>{cartItem.itemQuantity}</div>
            <div>{cartItem.item.name}</div>
            <div>${cartItem.item.price * cartItem.itemQuantity}</div>
          </div>
        );
      })}
      <hr className="checkout-success-divider" />
      {useRewardsPoints ? (
        <div>
          <div className="checkout-order-details checkout-subtotal-price">
            <div>Subtotal</div>
            <div>${subTotalPrice}</div>
          </div>
          <div className="checkout-order-details">
            <div></div>
            <div>-${rewardsPointsPrice}</div>
          </div>
          <div className="checkout-order-details">
            <div>Using Rewards Points</div>
            <div>${subTotalPriceWithPoints}</div>
          </div>
          <div className="checkout-order-details">
            <div>Tax</div>
            <div>${taxWithPoints}</div>
          </div>
          <div className="checkout-order-details checkout-total-price">
            <div>Total</div>
            <div>${totalPriceWithPoints}</div>
          </div>
        </div>
      ) : (
        <div>
          <div className="checkout-order-details checkout-subtotal-price">
            <div>Subtotal</div>
            <div>${subTotalPrice}</div>
          </div>
          <div className="checkout-order-details">
            <div>Tax</div>
            <div>${tax}</div>
          </div>
          <div className="checkout-order-details checkout-total-price">
            <div>Total</div>
            <div>${totalPrice}</div>
          </div>
        </div>
      )}
      <div className="checkout-order-details checkout-rewards-points">
        <div>My Rewards Points</div>
        <div>{user.rewardPoints} Points</div>
      </div>
      <hr className="checkout-success-divider" />
      <Link to="/">
        <Button button="Continue" />
      </Link>
    </div>
  );
}

export default CheckoutSuccess;
