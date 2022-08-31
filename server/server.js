const express = require("express");
require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const PORT = process.env.PORT || 5000;
const cors = require("cors");

connectDB(); // DB Config

const app = express(); // Initialize Express
const log = console.log;

app.use(cors()); // cors middleware

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(PORT, () => log(`Server running on port ${PORT}`));
