const express = require("express");
const app = express();
const http = require("http");
require("dotenv").config();
const DynamoDB = require("./connection/dynamoDB");
const path = require("path");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDOcs = require("swagger-jsdoc");
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Reto Backend Api StarWars",
      version: "1.0",
    },
    servers: [
      {
        url: `${process.env.API_LAMBDA}`,
      },
    ],
  },
  apis: [`${path.join(__dirname, "swagger.config.js")}`],
};
DynamoDB.ConfigConnection();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Swagger Settings
app.use(
  "/star-wars-docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerJsDOcs(swaggerSpec))
);

const server = http.createServer(app);
server.listen(parseInt(process.env.PORT));
module.exports = server;
