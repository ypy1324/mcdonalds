const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uid: String,
  displayName: String,
  email: String,
  rewardPoints: Number,
  address: {
    street: String,
    city: String,
    province: String,
    postalCode: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
