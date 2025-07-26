const express = require("express");
const router = express.Router();
const { Review } = require("../model/Review");
const { MenuItem } = require("../model/MenuItem");

// API to add a review
router.post("/addReview", async (req, res) => {
  // const { itemId, userUid, content } = req.body;
  // if (!itemId || !userUid || !content) {
  //   return res
  //     .status(400)
  //     .json({ success: false, message: "Missing required fields" });
  // }
  // try {
  //   const review = {
  //     userUid,
  //     content,
  //   };
  //   const updatedItem = await MenuItem.findByIdAndUpdate(
  //     itemId,
  //     { $push: { reviews: review } },
  //     { new: true }
  //   );
  //   if (!updatedItem) {
  //     return res
  //       .status(404)
  //       .json({ success: false, message: "Menu item not found" });
  //   }
  //   res.status(200).json({ success: true, item: updatedItem });
  // } catch (err) {
  //   console.error("Failed to add review:", err);
  //   res.status(500).json({ success: false, message: "Server error" });
  // }
});

module.exports = router;
