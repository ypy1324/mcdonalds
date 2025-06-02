const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const config = require("./config/key.js");

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { MenuItem } = require("./model/MenuItem");

app.listen(port, () => {
  mongoose
    .connect(config.mongoURI)
    .then(() => {
      console.log(`Example app listening on port ${port}...`);
      console.log("MongoDB connected successfully...");
    })
    .catch((err) => {
      console.log(`${err}`);
    });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// API to get menu items by category
app.post("/api/menu/item", (req, res) => {
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
app.post("/api/menu/item/detail", (req, res) => {
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
