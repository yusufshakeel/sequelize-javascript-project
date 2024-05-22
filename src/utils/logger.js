"use strict";

const loggerInstance = require("pino")({
  level: process.env.LOG_LEVEL || "info",
  nestedKey: "payload",
  formatters: {
    level: (label) => {
      return { level: label.toUpperCase() };
    },
  },
});

module.exports = function logger() {
  const trace = (message, data) => loggerInstance.trace(data, message);
  const debug = (message, data) => loggerInstance.debug(data, message);
  const info = (message, data) => loggerInstance.info(data, message);
  const warn = (message, data) => loggerInstance.warn(data, message);
  const error = (message, data) => loggerInstance.error(data, message);
  const fatal = (message, data) => loggerInstance.fatal(data, message);
  return { trace, debug, info, warn, error, fatal };
};
