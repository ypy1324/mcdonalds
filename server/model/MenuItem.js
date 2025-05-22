const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  calorie: Number,
  rating: Number,
  ratingCount: Number,
  description: String,
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = { MenuItem };
