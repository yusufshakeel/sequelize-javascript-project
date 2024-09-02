"use strict";

const bootstrap = require("./bootstrap");
const logger = require("./utils/logger")();

async function start() {
    await bootstrap();
}

start()
    .then(() => {
        console.log("Done!");
        console.log("Press Ctrl+C to exit.");
    })
    .catch((error) => {
        logger.error("ERROR", {error});
    });
