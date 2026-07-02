const mongoose = require("mongoose");

const HoldingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  stockName: {
    type: String,
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
  },

  avg: {
    type: Number,
    required: true,
  },

   price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Holding", HoldingSchema);