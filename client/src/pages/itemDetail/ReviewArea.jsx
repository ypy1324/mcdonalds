import React from "react";
import { GoHeart } from "react-icons/go";
import { useSelector } from "react-redux";

function ReviewArea() {
  const user = useSelector((state) => state.user);

  return (
    <div className="review-area-wrapper">
      <div className="review-area-header">
        <div>Reviews</div>
        <div>2</div>
      </div>
      {user.accessToken ? (
        <div className="review-input">
          <textarea placeholder="Add a review..." />
          <div>
            <button>Submit</button>
          </div>
        </div>
      ) : null}
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
