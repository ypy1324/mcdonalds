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
  let itemExists = false;
  Cart.findOne({ userUid: req.body.userUid })
    .exec()
    .then((cart) => {
      cart.items.map((item) => {
        // console.log(item._id.toString(), req.body.item._id.toString());
        if (item.item.toString() === req.body.item._id.toString()) {
          item.itemQuantity += 1;
          cart.quantity += 1;
          cart.save();
          itemExists = true;
          return res.status(200).json({ success: true });
        }
      });
      if (!itemExists) {
        cart.items.push({
          item: req.body.item._id,
          itemQuantity: 1,
        });
        cart.quantity += 1;
        cart.save();
        return res.status(200).json({ success: true });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false });
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

// API to adjust the quantity of an item in the cart
router.post("/quantity", (req, res) => {
  Cart.findOne({ userUid: req.body.userUid })
    .exec()
    .then((cart) => {
      cart.items.map((item) => {
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
              cart.items = cart.items.filter(
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

router.post("/getCart", (req, res) => {
  Cart.findOne({ userUid: req.body.userId })
    // .populate("items.item")
    .exec()
    .then((cartItems) => {
      res.status(200).json({ success: true, items: cartItems });
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
      cart.items.map((item) => {
        if (item._id.toString() === req.body.item._id.toString()) {
          cart.quantity -= item.itemQuantity;
          cart.items = cart.items.filter(
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
