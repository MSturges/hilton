const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
  hotel: {
    type: Schema.Types.ObjectId,
    ref: "hotel"
  },
  customerName: String,
  arivalDate: String,
  departDate: String,
});

const Reservation = mongoose.model("reservation", ReservationSchema);

module.exports = Reservation;
