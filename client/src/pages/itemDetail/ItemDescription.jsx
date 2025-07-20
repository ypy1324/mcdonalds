import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { storeCartInfo } from "../../reducer/cartSlice";
import axios from "axios";

function ItemDescription(props) {
  const params = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [itemDetail, setItemDetail] = useState({});

  useEffect(() => {
    let body = { itemName: params.itemDetail };
    axios
      .post("/api/menu/item/detail", body)
      .then((res) => {
        if (res.data.success) {
          setItemDetail(res.data.item);
        } else {
          console.log("Failed to fetch item details");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAddToCart = (item) => {
    let body = {
      userUid: user.uid,
      item: item,
    };
    axios
      .post("/api/cart/addToCart", body)
      .then((res) => {
        if (res.data.success) {
          axios.post("/api/cart/getCart", { userId: user.uid }).then((res) => {
            if (res.data.success) {
              let cartDetail = {
                quantity: res.data.cartItems.quantity,
                cartItems: res.data.cartItems.cartItems,
              };
              dispatch(storeCartInfo(cartDetail));
            }
          });
          console.log("Item added to cart successfully");
        } else {
          console.log("Failed to add item to cart");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="item-description-wrapper">
      <div>
        <img className="item-detail-image" src={itemDetail.image} />
      </div>
      <div>
        <div className="item-detail-name">{itemDetail.name}</div>
        <div className="item-detail-price">
          <div>${itemDetail.price}</div>
        </div>
        <div className="item-detail-description">{itemDetail.description}</div>
        <button
          className="add-to-cart-btn"
          onClick={() => handleAddToCart(props.item)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ItemDescription;
