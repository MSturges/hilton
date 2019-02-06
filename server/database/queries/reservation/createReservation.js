const Hotel = require("../../models/hotel");
const Reservation = require("../../models/reservation");

module.exports = async ({
  hotelID,
  roomID,
  hotelName,
  customerName,
  arivalDate,
  departDate
}) => {
  // Set room to no longer available
  Hotel.findOne({ _id: hotelID }).then(hotel => {
    const updatedRooms = hotel.rooms.map(room => {
      if (room.id === roomID) {
        room.available = false;
      }
      return room;
    });
    hotel.set("rooms", updatedRooms);
    hotel.save();
  });

  const reservation = new Reservation({
    hotelID,
    roomID,
    customerName,
    arivalDate,
    departDate
  });

  return reservation.save()

};
