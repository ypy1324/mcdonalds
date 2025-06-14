const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userUid: String,
  quantity: { type: Number, default: 0 },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" }],
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = { Cart };
