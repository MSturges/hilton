const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;

const RoomType = require("../Room/roomType");

const ReservationType = new GraphQLObjectType({
  name: "ReservationType",
  fields: {
    id: { type: GraphQLID },
    hotelName: { type: GraphQLString },
    arivalDate: { type: GraphQLString },
    departDate: { type: GraphQLString },
    room: { type: RoomType }
  }
});

module.exports = ReservationType;
