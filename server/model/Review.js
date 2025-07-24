const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    userUid: String,
    content: String,
    timeline: { type: Date, default: Date.now },
    likes: { type: Number, default: 0 },
    userLiked: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { _id: true }
);

module.exports = reviewSchema;
