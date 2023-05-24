"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Sequelize } = require("sequelize");


const app = express();
const port = process.env.PORT || 3001;

const envConfigs = require("./database/config/config.js");
const env = process.env.NODE_ENV || "development";
const config = envConfigs[env];

const sequelizeInstance = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: "postgres",
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./database/models/index.js");
db.sequelize.sync()

sequelizeInstance
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
        return sequelizeInstance.sync();
    })
// sequelizeInstance.sync() 
  .then(() => {
    console.log("All models were synchronized successfully.");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}.`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = app;
