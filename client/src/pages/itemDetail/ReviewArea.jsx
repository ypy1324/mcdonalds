import React from "react";
import { GoHeart } from "react-icons/go";

function ReviewArea() {
  return (
    <div className="review-area-wrapper">
      <div className="review-area-header">
        <div>Reviews</div>
        <div>2</div>
      </div>
      <textarea className="review-textarea" />
      <div className="review-info">
        <div className="reviewer-info">
          <div>Mark</div>
          <div>1h ago</div>
        </div>
        <div className="review-text">It was good good good good.</div>
        <div className="review-likes">
          <GoHeart />
          <div>8</div>
        </div>
      </div>
      <div className="review-info">
        <div className="reviewer-info">
          <div>Mark</div>
          <div>1h ago</div>
        </div>
        <div className="review-text">It was good good good good.</div>
        <div className="review-likes">
          <GoHeart />
          <div>8</div>
        </div>
      </div>
    </div>
  );
}

export default ReviewArea;
