import React, { useState, useEffect } from "react";
import CartList from "./CartList";
import CartCheckout from "./CartCheckout";
import { useSelector } from "react-redux";
import axios from "axios";
import "./MyCart.css";

function MyCart() {
  const user = useSelector((state) => state.user);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (user?.uid) {
      const body = { userId: user.uid };
      axios
        .post("/api/cart/getCart", body)
        .then((res) => {
          if (res.data.success) {
            setCartItems([...res.data.items.items]);
          } else {
            console.error("Failed to fetch cart quantity");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [user]);

  return (
    <div className="mycart-wrapper">
      <div className="mycart-header">My Cart</div>
      <div className="mycart-content">
        <CartList cartItems={cartItems} />
        <CartCheckout cartItems={cartItems} />
      </div>
    </div>
  );
}

export default MyCart;
