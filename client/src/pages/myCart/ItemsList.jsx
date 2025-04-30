import React from "react";
import mainBurger from "../../assets/images/mainBurger.png";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import "./MyCart.css";

function ItemsList() {
  return (
    <div>
      <div className="items-list-header">Items</div>
      <div className="items-list-item">
        <img src={mainBurger} className="item-img" />
        <div className="item-details">
          <div className="item-header">Egg McMuffin</div>
          <div className="item-quantity">
            <CiCircleMinus className="quantity-symbol" />
            <div className="quantity">1</div>
            <CiCirclePlus className="quantity-symbol" />
            <div className="item-total">$6.99</div>
          </div>
          <button className="item-remove-btn">Remove</button>
        </div>
      </div>
      <div className="items-list-item">
        <img src={mainBurger} className="item-img" />
        <div className="item-details">
          <div className="item-header">Egg McMuffin</div>
          <div className="item-quantity">
            <CiCircleMinus className="quantity-symbol" />
            <div className="quantity">1</div>
            <CiCirclePlus className="quantity-symbol" />
            <div className="item-total">$6.99</div>
          </div>
          <button className="item-remove-btn">Remove</button>
        </div>
      </div>
    </div>
  );
}

export default ItemsList;
