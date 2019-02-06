const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const RoomType = require('../Room/roomType')
const ReservationType = require('../Reservation/reservationType')

const HotelType = new GraphQLObjectType({
  name: "Hotel",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    rooms: {
      type: new GraphQLList(RoomType)
    },
    reservations: {
      type: new GraphQLList(ReservationType)
    }
  }
});

module.exports = HotelType;
