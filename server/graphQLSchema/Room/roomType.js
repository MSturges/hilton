const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLFloat } = graphql;

const RoomType = new GraphQLObjectType({
  name: "Rooms",
  fields: {
    id: { type: GraphQLID },
    roomName: { type: GraphQLString },
    price: { type: GraphQLFloat },
    beds: { type: GraphQLFloat },
    baths: { type: GraphQLFloat }
  }
});

module.exports = RoomType;
