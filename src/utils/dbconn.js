"use strict";

const { Sequelize } = require("sequelize");
const stringify = require("fast-safe-stringify");
const { defaultDbConfig } = require("../configs/db-config");
const logger = require("../utils/logger")();

const sequelize = new Sequelize(defaultDbConfig);
const initDbConnection = async () => {
  logger.info("Initialize database connection...");
  await sequelize
    .authenticate()
    .then(() => {
      logger.info("Database connection established.");
    })
    .catch((e) => {
      logger.error("Failed to connect to the database.", stringify(e));
      throw e;
    });
};

module.exports = {
  sequelize,
  initDbConnection,
};
