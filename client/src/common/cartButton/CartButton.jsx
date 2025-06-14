import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiShoppingBasketLine } from "react-icons/ri";
import axios from "axios";
import { useSelector } from "react-redux";
import "./CartButton.css";

function CartButton() {
  const [cartQuantity, setCartQuantity] = useState(0);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user?.uid) {
      const body = { userId: user.uid };
      axios
        .post("/api/cart/getCartQuantity", body)
        .then((res) => {
          if (res.data.success) {
            setCartQuantity(res.data.quantity);
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
    <Link to="/mycart" className="cart-button">
      <RiShoppingBasketLine />
      <div className="cart-qty">{cartQuantity}</div>
    </Link>
  );
}

export default CartButton;
