const mongoose = require("mongoose");

const WatchlistSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    stockName: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    change: {
      type: String,
      default: "+0.00%",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Watchlist", WatchlistSchema);