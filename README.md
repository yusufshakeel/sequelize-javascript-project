# sequelize-javascript-project

## Table of Content

* [Getting started](#getting-started)
* [Environment variables](#environment-variables)

## Getting started

Install the dependencies by running the following command in the terminal.

```shell
npm i
```

(Optional) Create a test database by logging into PSQL.

```shell
create database test_sequelize_db;
```

Now, use this test database in the next step mentioned below. Alternatively,
use any other test database you have.

## Environment variables

Note: Default values are listed below. Feel free to change them.

```shell
export DB_NAME=test_sequelize_db        # set your database name here
export DB_USERNAME=                     # set username of your database here
export DB_PASSWORD=                     # set password of your database here
export DB_HOST=localhost                # set it to any other value
export DB_PORT=5432                     # set it to any custom value
export DB_MIN_POOL_SIZE=1               # let the min value be >= 1
export DB_MAX_POOL_SIZE=3               # let the max value be >= min
export DB_DIALECT=postgres              # postgres is used in this project
export DB_LOGGING_ENABLED=disabled      # possible values: enabled, disabled
export LOG_LEVEL=info                   # possible values: trace, debug, info, warn, error, fatal
```

## Bootstrap

Run the following command in the terminal to create test tables inside the
test database.

```shell
npm run bootstrap
```

Sample response
```text
npm run bootstrap

> sequelize-javascript-project@1.0.0 bootstrap
> node src/index.js

{"level":"INFO","time":1725288234002,"pid":95293,"hostname":"ymbp","msg":"Initialize database connection..."}
{"level":"INFO","time":1725288234037,"pid":95293,"hostname":"ymbp","msg":"Database connection established."}
Done!
Press Ctrl+C to exit.
^C{"level":"INFO","time":1725288236115,"pid":95293,"hostname":"ymbp","msg":"[SHUTDOWN] SIGINT..."}
{"level":"INFO","time":1725288236116,"pid":95293,"hostname":"ymbp","msg":"[SHUTDOWN] SIGINT..."}
{"level":"INFO","time":1725288236116,"pid":95293,"hostname":"ymbp","msg":"[SHUTDOWN] SIGINT...DONE."}
```

