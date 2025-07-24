const mongoose = require("mongoose");
const reviewSchema = require("./Review");

const menuItemSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  description: String,
  category: String,
  reviews: [reviewSchema],
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = { MenuItem };
