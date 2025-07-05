import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function OrderSummary() {
  const cart = useSelector((state) => state.cart);

  let subTotalPrice = 0;
  cart.cartItems.map((item) => {
    subTotalPrice += item.item.price * item.itemQuantity;
  });
  subTotalPrice = subTotalPrice.toFixed(2);

  const tax = (subTotalPrice * 0.13).toFixed(2);
  const totalPrice = (+subTotalPrice + +tax).toFixed(2);

  useEffect(() => {
    console.log(cart);
  }, []);

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
      <div className="place-order-wrapper">
        <Link to="/checkout/success">
          <button className="place-order-btn">Place Order</button>
        </Link>
      </div>
    </div>
  );
}

export default OrderSummary;
