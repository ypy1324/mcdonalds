const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userUid: String,
  quantity: { type: Number, default: 0 },
  items: [
    {
      item: { type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" },
      itemQuantity: { type: Number, default: 1 },
    },
  ],
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = { Cart };
