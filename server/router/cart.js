const express = require("express");
const router = express.Router();
const { Cart } = require("../model/Cart");

// API to fetch cart quantity
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

// API to add an item to the cart
router.post("/addToCart", (req, res) => {
  Cart.findOne({ userUid: req.body.userUid })
    .exec()
    .then((cart) => {
      cart.items.map((item) => {
        if (item.item.toString() === req.body.item._id.toString()) {
          item.itemQuantity += 1;
          cart.quantity += 1;
          cart.save();
          return res.status(200).json({ success: true });
        }
      });
      Cart.updateOne(
        { userUid: req.body.userUid },
        { $inc: { quantity: 1 }, $push: { items: { item: req.body.item } } }
      )
        .exec()
        .then(() => {
          res.status(200).json({ success: true });
        })
        .catch((err) => {
          console.log(err);
          res.status(400).json({ success: false });
        });
    });
});

// API to fetch all items in the cart
router.post("/getCartItems", (req, res) => {
  Cart.findOne({ userUid: req.body.userId })
    .populate("items.item")
    .exec()
    .then((cartItems) => {
      res.status(200).json({ success: true, items: cartItems.items });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false });
    });
});

module.exports = router;
