import React from "react";
import mainBurger from "../../assets/images/mainBurger.png";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

function CartList() {
  return (
    <div>
      <div className="cart-list-header">Items</div>
      <div className="cart-list-item">
        <img src={mainBurger} className="cart-item-img" />
        <div className="cart-item-details">
          <div className="cart-item-header">Egg McMuffin</div>
          <div className="cart-item-quantity">
            <CiCircleMinus className="quantity-symbol" />
            <div className="cart-item-quantity">1</div>
            <CiCirclePlus className="quantity-symbol" />
            <div className="cart-item-total">$6.99</div>
          </div>
          <button className="cart-item-remove-btn">Remove</button>
        </div>
      </div>
      <div className="cart-list-item">
        <img src={mainBurger} className="cart-item-img" />
        <div className="cart-item-details">
          <div className="cart-item-header">Egg McMuffin</div>
          <div className="cart-item-quantity">
            <CiCircleMinus className="quantity-symbol" />
            <div className="cart-item-quantity">1</div>
            <CiCirclePlus className="quantity-symbol" />
            <div className="cart-item-total">$6.99</div>
          </div>
          <button className="cart-item-remove-btn">Remove</button>
        </div>
      </div>
    </div>
  );
}

export default CartList;
