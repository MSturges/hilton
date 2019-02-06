const graphql = require("graphql");
const {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
} = graphql;

const ReservationType = require("./reservationType");
const CreateReservation = require("../../database/queries/reservation/createReservation");
const GetReservations = require("../../database/queries/reservation/getReservations");

const Queries = {
  name: "Query",
  fields: {
    getReservations: {
      type: new GraphQLList(ReservationType),
      description: "Get all Reservations",
      resolve() {
        return GetReservations().then(res => {
          return res;
        });
      }
    },
    getReservation: {
      type: ReservationType,
      description: "Get a single reservation by id",
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return GetReservation(id).then(res => {
          return res;
        });
      }
    }
  }
};

const Mutations = {
  name: "Mutation",
  fields: {
    createReservation: {
      type: ReservationType,
      description: "Create a room reservation for a hotel",
      args: {
        hotelID: { type: new GraphQLNonNull(GraphQLID) },
        roomID: { type: new GraphQLNonNull(GraphQLID) },
        customerName: { type: GraphQLString },
        arivalDate: { type: GraphQLString },
        departDate: { type: GraphQLString }
      },
      resolve(
        parentValue,
        { hotelID, roomID, hotelName, customerName, arivalDate, departDate }
      ) {
        return CreateReservation({
          hotelID,
          roomID,
          customerName,
          arivalDate,
          departDate
        });
      }
    }
  }
};

module.exports = { Queries, Mutations };
