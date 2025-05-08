import React from "react";
import ItemDescription from "./ItemDescription";
import CommentArea from "./CommentArea";
import "./ItemDetail.css";

function ItemDetail() {
  return (
    <div className="item-detail-wrapper">
      <ItemDescription />
      <CommentArea />
    </div>
  );
}

export default ItemDetail;
