"use strict";

var _fs = _interopRequireDefault(require("fs"));
var _http = _interopRequireDefault(require("http"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// const fs = require('fs');

console.dir(_http["default"]);
var server = _http["default"].createServer(function (req, res) {
  res.writeHead(200, {
    "content-type": "application/json"
  });
  res.end(JSON.stringify({
    message: "ff"
  }, null, 2));
});