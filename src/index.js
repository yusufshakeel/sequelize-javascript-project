"use strict";

const bootstrap = require("./bootstrap");
const logger = require("./utils/logger")();

async function start() {
  await bootstrap();
}

start().catch((error) => {
  logger.error("ERROR", { error });
});
