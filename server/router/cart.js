const express = require("express");
const router = express.Router();
const { Cart } = require("../model/Cart");

// API to add an item to the cart
router.post("/addToCart", (req, res) => {
  let itemExists = false;
  Cart.findOne({ userUid: req.body.userUid })
    .exec()
    .then((cart) => {
      cart.cartItems.map((cartItem) => {
        if (cartItem.item.toString() === req.body.item._id.toString()) {
          cartItem.itemQuantity += 1;
          cart.quantity += 1;
          cart.save();
          itemExists = true;
          return res.status(200).json({ success: true, items: cart });
        }
      });
      if (!itemExists) {
        cart.cartItems.push({
          item: req.body.item._id,
          itemQuantity: 1,
        });
        cart.quantity += 1;
        cart.save();
        return res.status(200).json({ success: true, items: cart });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false });
    });
});

// API to get the cart
router.post("/getCart", (req, res) => {
  Cart.findOne({ userUid: req.body.userId })
    .populate("cartItems.item")
    .exec()
    .then((cartItems) => {
      res.status(200).json({ success: true, cartItems: cartItems });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false });
    });
});

// API to adjust the quantity of an item in the cart
router.post("/quantity", (req, res) => {
  Cart.findOne({ userUid: req.body.userUid })
    .exec()
    .then((cart) => {
      cart.cartItems.map((item) => {
        if (item._id.toString() === req.body.item._id.toString()) {
          if (req.body.action === "increase") {
            item.itemQuantity += 1;
            cart.quantity += 1;
            cart.save();
            return res.status(200).json({ success: true });
          } else {
            item.itemQuantity -= 1;
            cart.quantity -= 1;
            if (item.itemQuantity === 0) {
              cart.cartItems = cart.cartItems.filter(
                (cartItem) => cartItem._id.toString() !== item._id.toString()
              );
            }
            cart.save();
            return res.status(200).json({ success: true });
          }
        }
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false });
    });
});

// API to remove an item from the cart
router.post("/removeItem", (req, res) => {
  Cart.findOne({ userUid: req.body.userUid })
    .exec()
    .then((cart) => {
      cart.cartItems.map((item) => {
        if (item._id.toString() === req.body.item._id.toString()) {
          cart.quantity -= item.itemQuantity;
          cart.cartItems = cart.cartItems.filter(
            (cartItem) => cartItem._id.toString() !== item._id.toString()
          );

          cart.save();
          return res.status(200).json({ success: true });
        }
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false });
    });
});

module.exports = router;
