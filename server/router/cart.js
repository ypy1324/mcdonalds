const express = require("express");
const router = express.Router();
const { Cart } = require("../model/Cart");

// API to fetch cart quantity for a user
router.post("/getCartQuantity", (req, res) => {
  Cart.findOne({ userUid: req.body.userId })
    .exec()
    .then((cart) => {
      res.status(200).json({ success: true, quantity: cart.quantity });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false });
    });
});

module.exports = router;
