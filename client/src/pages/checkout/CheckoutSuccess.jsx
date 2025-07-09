import React, { useEffect } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Button from "../../common/button/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCartInfo } from "../../reducer/cartSlice";
import axios from "axios";

function CheckoutSuccess() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    let body = { userUid: user.uid };
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
      <div className="checkout-order-details checkout-subtotal-price">
        <div>Subtotal</div>
        <div>$13.98</div>
      </div>
      <div className="checkout-order-details">
        <div>Tax</div>
        <div>$1.57</div>
      </div>
      <div className="checkout-order-details checkout-total-price">
        <div>Total</div>
        <div>$15.54</div>
      </div>
      <hr className="checkout-success-divider" />
      <Link to="/">
        <Button button="Continue" />
      </Link>
    </div>
  );
}

export default CheckoutSuccess;
