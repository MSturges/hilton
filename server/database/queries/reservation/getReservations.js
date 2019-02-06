const Reservation = require('../../models/reservation');

module.exports = () => {
  return Reservation.find()
};