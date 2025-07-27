const mongoose = require("mongoose");
const cartSchema = require("./Cart");

const userSchema = new mongoose.Schema({
  firebaseUid: String,
  displayName: String,
  email: String,
  rewardPoints: { type: Number, default: 0 },
  address: {
    street: String,
    city: String,
    province: String,
    postalCode: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
