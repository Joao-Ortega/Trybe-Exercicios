"use strict";
exports.__esModule = true;
var promise_1 = require("mysql2/promise");
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
exports["default"] = promise_1["default"].createPool({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});
