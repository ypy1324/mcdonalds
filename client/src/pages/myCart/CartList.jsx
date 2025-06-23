import React from "react";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import axios from "axios";
import { useSelector } from "react-redux";

function CartList(props) {
  const user = useSelector((state) => state.user);

  const handleAddQuantity = (item) => {
    let body = {
      userUid: user.uid,
      item: item,
    };
    axios
      .post("/api/cart/addQuantity", body)
      .then((res) => {
        if (res.data.success) {
          console.log("Item quantity added successfully");
        } else {
          console.log("Failed to add item quantity");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="cart-list-header">Items</div>
      {props.cartItems.map((item, i) => {
        return (
          <div key={i} className="cart-list-item">
            <img src={item.item.image} className="cart-item-img" />
            <div className="cart-item-details">
              <div className="cart-item-header">{item.item.name}</div>
              <div className="cart-item-quantity">
                <CiCircleMinus className="quantity-symbol" />
                <div className="cart-item-quantity">{item.itemQuantity}</div>
                <CiCirclePlus
                  className="quantity-symbol"
                  onClick={() => handleAddQuantity(item)}
                />
                <div className="cart-item-total">${item.item.price}</div>
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
