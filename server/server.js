const express = require("express");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");

const schema = require("./graphQLSchema/schema");

const app = express();

// could put this in a .env...but for simplicity of code review I have hard coded it
const MONGO_URI =
  "mongodb://hiltonProgrammer:react-native1337@ds121135.mlab.com:21135/max_hilton_code_challenge";

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
  .once("open", () => console.log("Connected to MongoLab instance."))
  .on("error", error => console.log("Error connecting to MongoLab:", error));

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

module.exports = app;
