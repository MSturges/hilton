const graphql = require("graphql");
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLID } = graphql;

const RoomType = require("../Room/roomType");

const ReservationType = new GraphQLObjectType({
  name: "ReservationType",
  fields: {
    id: { type: GraphQLID },
    hotelName: { type: new GraphQLNonNull(GraphQLString) },
    customerName: { type: new GraphQLNonNull(GraphQLString) },
    arivalDate: { type: new GraphQLNonNull(GraphQLString) },
    departDate: { type: new GraphQLNonNull(GraphQLString) }
  }
});

module.exports = ReservationType;
