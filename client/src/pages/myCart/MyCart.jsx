import React from "react";
import mainBurger from "../../assets/images/mainBurger.png";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import "./MyCart.css";

function MyCart() {
  return (
    <div className="mycart-wrapper">
      <div className="mycart-header">MyCart</div>
      <div className="mycart-content">
        <div className="items-list">
          <div className="items-list-header">Items</div>
          <div className="items-list-item">
            <img src={mainBurger} className="item-img" />
            <div>
              <div className="item-header">Egg McMuffin</div>
              <div className="item-quantity">
                <CiCircleMinus className="quantity-symbol" />
                <div className="quantity">1</div>
                <CiCirclePlus className="quantity-symbol" />
              </div>
              <button className="item-remove-btn">Remove</button>
            </div>
            <div className="item-total">$6.99</div>
          </div>
        </div>
        <div className="items-checkout">
          <div className="checkout-items-count">2 Items</div>
          <div className="checkout-price">
            <div>Subtotal</div>
            <div>$24.46</div>
          </div>
          <div className="checkout-price">
            <div>Tax</div>
            <div>$2.76</div>
          </div>
          <div className="checkout-price checkout-total">
            <div>Total</div>
            <div>$98.51</div>
          </div>
          <div className="checkout-btn-wrapper">
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCart;
