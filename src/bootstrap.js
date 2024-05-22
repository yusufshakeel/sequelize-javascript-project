"use strict";

const shutdown = require("./shutdown");
const { sequelize, initDbConnection } = require("./utils/dbconn");

module.exports = async function bootstrap() {
  await initDbConnection();
  shutdown({ sequelize });
};
