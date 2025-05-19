const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "../client/dist")));

app.listen(port, () => {
  mongoose
    .connect(
      "mongodb+srv://ypy1324:1q2w3e4r@mcdonalds.mqbllit.mongodb.net/?retryWrites=true&w=majority&appName=mcdonalds"
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

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/dist/index.html"));
// });
