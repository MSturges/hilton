const mongoose = require("mongoose");
//Models
require("../models/hotel");

// could put this in a .env...but for simplicity of code review I have hard coded it
const MONGO_URI =
  "mongodb://hiltonProgrammer:react-native1337@ds121135.mlab.com:21135/max_hilton_code_challenge";

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);

// Create reference to model hotel
const Hotel = mongoose.model("hotel");

// Seed data, to seed.
const hotelSeedData = [
  {
    name: "Hilton Denver",
    rooms: [
      {
        roomName: "Singel Fox",
        available: true,
        price: 100.0,
        beds: 1,
        baths: 1
      },
      {
        roomName: "Double Fox",
        available: true,
        price: 1750.0,
        beds: 2,
        baths: 1.5
      }
    ],
    reservations: []
  },
  {
    name: "Hilton New York",
    rooms: [
      {
        roomName: "Singel Fox",
        available: true,
        price: 100.0,
        beds: 1,
        baths: 1
      },
      {
        roomName: "Double Fox",
        available: true,
        price: 1750.0,
        beds: 2,
        baths: 1.5
      }
    ],
    reservations: []
  },
  {
    name: "Hilton San Francisco",
    rooms: [
      {
        roomName: "Singel Fox",
        available: true,
        price: 100.0,
        beds: 1,
        baths: 1
      },
      {
        roomName: "Double Fox",
        available: true,
        price: 1750.0,
        beds: 2,
        baths: 1.5
      }
    ],
    reservations: []
  },
  {
    name: "Hilton London",
    rooms: [
      {
        roomName: "Singel Fox",
        available: true,
        price: 100.0,
        beds: 1,
        baths: 1
      },
      {
        roomName: "Double Fox",
        available: true,
        price: 1750.0,
        beds: 2,
        baths: 1.5
      }
    ],
    reservations: []
  }
];

// Seed MongoDB instance
const seedData = () => {
  hotelSeedData.forEach(({ name, rooms }) => {
    let hotel = new Hotel({ name, rooms });

    hotel
      .save()
      .then(res => {
        console.log("Seeded Hotel", name);
        console.log("Response Success", res);
        console.log("================");
      })
      .catch(err => {
        console.log("Error creating Hotel", err);
      });
  });
};

seedData();
