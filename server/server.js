const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const config = require("./config/key.js");

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/menu", require("./router/menu.js"));
app.use("/api/user", require("./router/user.js"));
app.use("/api/cart", require("./router/cart.js"));
app.use("/api/review", require("./router/review.js"));

app.listen(port, () => {
  mongoose
    .connect(config.mongoURI, { dbName: "mcdonalds" })
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
