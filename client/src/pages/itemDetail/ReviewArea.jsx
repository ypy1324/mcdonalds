import React, { useState, useEffect } from "react";
import { GoHeart } from "react-icons/go";
import { useSelector } from "react-redux";
import axios from "axios";

function ReviewArea(props) {
  const user = useSelector((state) => state.user);
  const [reviewContent, setReviewContent] = useState("");

  useEffect(() => {
    // console.log(props.item);
  }, []);

  const handleSubmitReview = (content) => {
    let body = {
      itemId: props.item._id,
      uid: user.uid,
      content: content,
    };
    axios
      .post("/api/review/addReview", body)
      .then((res) => {
        if (res.data.success) {
          console.log("Review added successfully");
          setReviewContent("");
        } else {
          console.log("Failed to add review");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="review-area-wrapper">
      <div className="review-area-header">
        <div>Reviews</div>
        <div>{props.item.reviews.length}</div>
      </div>
      {user.uid ? (
        <div className="review-input">
          <textarea
            placeholder="Add a review..."
            value={reviewContent}
            onChange={(e) => setReviewContent(e.currentTarget.value)}
          />
          <div>
            <button onClick={() => handleSubmitReview(reviewContent)}>
              Submit
            </button>
          </div>
        </div>
      ) : null}
      {props.item.reviews.map((review, i) => {
        return (
          <div className="review-info" key={i}>
            <div className="reviewer-info">
              <div>{review.uid}</div>
              <div>1h ago</div>
            </div>
            <div className="review-text">It was good good good good.</div>
            <div className="review-likes">
              <GoHeart />
              <div>8</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ReviewArea;
