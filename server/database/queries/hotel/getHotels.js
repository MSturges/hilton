const Hotel = require("../../models/hotel");

module.exports = () => {
  return Hotel.find();
};
