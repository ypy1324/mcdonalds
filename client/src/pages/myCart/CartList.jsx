import React from "react";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

function CartList(props) {
  return (
    <div>
      <div className="cart-list-header">Items</div>
      {props.cartItems.map((item, i) => {
        return (
          <div key={i} className="cart-list-item">
            <img src={item.image} className="cart-item-img" />
            <div className="cart-item-details">
              <div className="cart-item-header">{item.name}</div>
              <div className="cart-item-quantity">
                <CiCircleMinus className="quantity-symbol" />
                <div className="cart-item-quantity">1</div>
                <CiCirclePlus className="quantity-symbol" />
                <div className="cart-item-total">${item.price}</div>
              </div>
              <button className="cart-item-remove-btn">Remove</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartList;
