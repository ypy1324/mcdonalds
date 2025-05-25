const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { MenuItem } = require("./model/MenuItem");

app.listen(port, () => {
  mongoose
    .connect(
      "mongodb+srv://ypy1324:1q2w3e4r@mcdonalds.mqbllit.mongodb.net/mcdonalds?retryWrites=true&w=majority&appName=mcdonalds"
    )
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

app.get("/api/menu/item", (req, res) => {
  MenuItem.find()
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true, item: doc });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false });
    });
});

app.post("/api/menu/add", (req, res) => {
  const item = new MenuItem({
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
    calorie: req.body.calorie,
    rating: req.body.rating,
    ratingCount: req.body.ratingCount,
    description: req.body.description,
    category: req.body.category,
  });
  item.save().then(() => {
    res.status(200).json({ success: true });
  });
});
