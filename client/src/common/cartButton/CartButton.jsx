import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { RiShoppingBasketLine } from "react-icons/ri";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { storeCartInfo } from "../../reducer/cartSlice";
import "./CartButton.css";

function CartButton() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (user?.uid) {
      const body = { userId: user.uid };
      axios
        .post("/api/cart/getCart", body)
        .then((res) => {
          if (res.data.success) {
            let cartDetail = {
              quantity: res.data.cartItems.quantity,
              cartItems: res.data.cartItems.cartItems,
            };
            dispatch(storeCartInfo(cartDetail));
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
      <div className="cart-qty">{cart.quantity}</div>
    </Link>
  );
}

export default CartButton;
