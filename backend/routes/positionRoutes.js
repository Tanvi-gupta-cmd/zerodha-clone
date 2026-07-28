const express = require("express");
const Position = require("../models/Position");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const position = await Position.find();
    res.json(position);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;