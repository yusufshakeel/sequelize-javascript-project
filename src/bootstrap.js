"use strict";

const shutdown = require("./shutdown");
const { sequelize, initDbConnection } = require("./utils/dbconn");
require("./models/customer");

module.exports = async function bootstrap() {
  await initDbConnection();

  await sequelize.sync();
  shutdown({ sequelize });
};
