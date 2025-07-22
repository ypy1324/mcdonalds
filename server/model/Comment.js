const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  content: String,
  timeline: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  userLiked: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = { Comment };
