import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ItemDescription() {
  const params = useParams();

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
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default ItemDescription;
