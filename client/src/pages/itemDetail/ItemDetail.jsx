import React from "react";
import ItemDescription from "./ItemDescription";
import ReviewArea from "./ReviewArea";
import { useLocation } from "react-router-dom";
import "./ItemDetail.css";

function ItemDetail() {
  const { state } = useLocation();
  const { item } = state || {};

  return (
    <div className="item-detail-wrapper">
      <ItemDescription item={item} />
      <ReviewArea />
    </div>
  );
}

export default ItemDetail;
