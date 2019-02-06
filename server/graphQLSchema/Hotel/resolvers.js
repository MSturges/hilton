const graphql = require("graphql");
const { GraphQLList, GraphQLString } = graphql;

const HotelType = require("./hotelType");
const GetHotels = require("../../database/queries/hotel/getHotels");
const CreateHotel = require("../../database/queries/hotel/createHotel");

const Queries = {
  name: "Query",
  fields: {
    getHotels: {
      type: new GraphQLList(HotelType),
      description: "Get all hotels",
      resolve() {
        return GetHotels().then(res => {
          return res;
        });
      }
    }
  }
};

const Mutations = {
  name: "Mutations",
  fields: {
    createHotel: {
      type: HotelType,
      description: "Create hotel",
      args: {
        name: { type: GraphQLString }
      },
      resolve(parentValue, { name }) {
        return CreateHotel({ name }).then(res => {
          return res;
        });
      }
    }
  }
};

module.exports = { Queries, Mutations };
