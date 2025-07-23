const express = require("express");
const router = express.Router();
const { Review } = require("../model/Review");
const { MenuItem } = require("../model/MenuItem");

// API to add a review
router.post("/addReview", (req, res) => {
  const { userUid, content } = req.body;
  const newReview = new Review({
    userUid,
    content,
  });
  newReview
    .save()
    // .then((review) => {
    //   return MenuItem.findByIdAndUpdate(
    //     { $push: { reviews: review._id } },
    //     { new: true }
    //   );
    // })
    .then((item) => {
      res.status(200).json({ success: true, item });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ success: false, message: "Failed to add review" });
    });
});

module.exports = router;
