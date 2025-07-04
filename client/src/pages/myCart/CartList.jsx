import React from "react";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import axios from "axios";
import { useSelector } from "react-redux";

function CartList(props) {
  const user = useSelector((state) => state.user);

  const handleQuantity = (item, action) => {
    let body = {
      userUid: user.uid,
      item: item,
      action: action,
    };
    axios
      .post("/api/cart/quantity", body)
      .then((res) => {
        if (res.data.success) {
          console.log("Item quantity adjusted successfully");
        } else {
          console.log("Failed to adjust item quantity");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeItemFromCart = (item) => {
    let body = {
      userUid: user.uid,
      item: item,
    };
    axios
      .post("/api/cart/removeItem", body)
      .then((res) => {
        if (res.data.success) {
          console.log("Item removed from cart successfully");
        } else {
          console.log("Failed to remove item from cart");
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
                <CiCircleMinus
                  className="quantity-symbol"
                  onClick={() => handleQuantity(item, "decrease")}
                />
                <div className="cart-item-quantity">{item.itemQuantity}</div>
                <CiCirclePlus
                  className="quantity-symbol"
                  onClick={() => handleQuantity(item, "increase")}
                />
                <div className="cart-item-total">${item.item.price}</div>
              </div>
              <button
                className="cart-item-remove-btn"
                onClick={() => removeItemFromCart(item)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartList;
