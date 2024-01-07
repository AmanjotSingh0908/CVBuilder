'use strict';

const ServerlessHttp = require("serverless-http");
const app = require("./server");

module.exports.startup = ServerlessHttp(app);
