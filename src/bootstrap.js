"use strict";

const shutdown = require("./shutdown");
const { sequelize, initDbConnection } = require("./utils/dbconn");
const Customer = require("./models/customer");

module.exports = async function bootstrap() {
  await initDbConnection();
  Customer(sequelize);
  await sequelize.sync();
  shutdown({ sequelize });
};
