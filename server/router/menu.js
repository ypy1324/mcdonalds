const express = require("express");
const router = express.Router();
const { MenuItem } = require("../model/MenuItem");

// API to get menu items by category
router.post("/item", (req, res) => {
  MenuItem.find({ category: req.body.category })
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true, item: doc });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false });
    });
});

// API to get details of a specific menu item by name
router.post("/item/detail", (req, res) => {
  MenuItem.findOne({ name: req.body.itemName })
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true, item: doc });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false });
    });
});

module.exports = router;
