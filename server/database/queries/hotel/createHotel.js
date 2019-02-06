const Hotel = require("../../models/hotel");

module.exports = hotelProps => {
  const hotel = new Hotel(hotelProps);
  return hotel.save();
};
