const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  description: String,
  category: String,
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = { MenuItem };
