const graphql = require("graphql");
const { GraphQLSchema, GraphQLObjectType } = graphql;
const merge = require("lodash/merge");

// Queries
const queries = merge(
  require("./Hotel/resolvers").Queries,
  require("./Reservation/resolvers").Queries
);

// Mutations
const mutations = merge(
  require("./Hotel/resolvers").Mutations,
  require("./Reservation/resolvers").Mutations
);

const RootQuery = new GraphQLObjectType(queries);
const RootMutations = new GraphQLObjectType(mutations);

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutations
});
