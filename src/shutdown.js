"use strict";

const logger = require("./utils/logger")();

module.exports = function shutdown({ sequelize }) {
  const sigInt = () => {
    process.on("SIGINT", async () => {
      logger.info("[SHUTDOWN] SIGINT...");
      await sequelize.close();
      logger.info("[SHUTDOWN] SIGINT...DONE.");
      process.exit();
    });
  };
  const sigTerm = () => {
    process.on("SIGTERM", async () => {
      logger.info("[SHUTDOWN] SIGTERM...");
      logger.info("[SHUTDOWN] SIGTERM...DONE.");
      process.exit();
    });
  };

  sigInt();
  sigTerm();
};
