const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HotelSchema = new Schema({
  name: String,
  rooms: [
    new Schema({
      roomName: String,
      available: Boolean,
      price: Number,
      beds: Number,
      baths: Number
    })
  ],
  reservations: [
    {
      type: Schema.Types.ObjectId,
      ref: "reservation"
    }
  ]
});

const Hotel = mongoose.model("hotel", HotelSchema);

module.exports = Hotel;
