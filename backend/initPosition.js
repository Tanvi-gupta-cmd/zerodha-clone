require("dotenv").config();

const mongoose = require("mongoose");
const Position = require("./models/Position");

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected");

    await Position.deleteMany({});

    await Position.insertMany([
      {
        product: "CNC",
        name: "EVEREADY",
        qty: 2,
        avg: 316.27,
        price: 312.35,
        net: "-0.58%",
        day: "-1.24%",
      },
      {
        product: "CNC",
        name: "JUBLFOOD",
        qty: 1,
        avg: 1412.0,
        price: 1405.0,
        net: "-0.49%",
        day: "+0.11%",
      },
      {
        product: "CNC",
        name: "TCS",
        qty: 1,
        avg: 3194.8,
        price: 3235.0,
        net: "+1.26%",
        day: "+0.15%",
      },
    ]);

    console.log("Positions inserted!");

    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });