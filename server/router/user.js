const express = require("express");
const router = express.Router();
const { User } = require("../model/User");

// API to register a new user
app.post("/register", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false });
    });
});

module.exports = router;
