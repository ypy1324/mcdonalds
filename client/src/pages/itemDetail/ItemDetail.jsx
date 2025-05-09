import React from "react";
import ItemDescription from "./ItemDescription";
import ReviewArea from "./ReviewArea";
import "./ItemDetail.css";

function ItemDetail() {
  return (
    <div className="item-detail-wrapper">
      <ItemDescription />
      <ReviewArea />
    </div>
  );
}

export default ItemDetail;
