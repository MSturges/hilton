const mongoose = require("mongoose");
const connect = require("connect");
const { ApolloServer } = require("apollo-server-express");

const schema = require("./graphQLSchema/schema");

// could put this in a .env...but for simplicity of code review I have hard coded it
const MONGO_URI =
  "mongodb://hiltonProgrammer:react-native1337@ds121135.mlab.com:21135/max_hilton_code_challenge";

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
  .once("open", () => console.log("Connected to MongoLab instance."))
  .on("error", error => console.log("Error connecting to MongoLab:", error));

// GraphQL stuff
const server = new ApolloServer({
  schema,
  introspection: true,
  playground: true
});
const app = connect();
const path = "/graphql";

server.applyMiddleware({ app, path });

app.listen({ port: process.env.PORT || 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

module.exports = app;
