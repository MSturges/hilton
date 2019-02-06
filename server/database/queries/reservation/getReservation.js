const Reservation = require('../../models/reservation');

module.exports = (_id) => {
  return Reservation.findOne({ _id: _id})
};