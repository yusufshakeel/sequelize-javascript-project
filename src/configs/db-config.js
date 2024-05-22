"use strict";

const database = process.env.DB_NAME || "test_sequelize_db";
const username = process.env.DB_USERNAME || "";
const password = process.env.DB_PASSWORD || "";
const host = process.env.DB_HOST || "localhost";
const port = process.env.DB_PORT || "5432";
const minPoolSize = parseInt(process.env.DB_MIN_POOL_SIZE || "1", 10);
const maxPoolSize = parseInt(process.env.DB_MAX_POOL_SIZE || "3", 10);
const dialect = process.env.DB_DIALECT || "postgres";
const logging = process.env.DB_LOGGING_ENABLED === "enabled";

const defaultDbConfig = {
  username,
  password,
  host,
  port,
  database,
  dialect,
  pool: {
    min: minPoolSize,
    max: maxPoolSize,
  },
  logging,
};

module.exports = {
  defaultDbConfig,
  // development: defaultDbConfig,
  // test: defaultDbConfig,
  // production: defaultDbConfig,
};
