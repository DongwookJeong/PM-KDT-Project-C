"use strict";

var express = require('express');
var app = express();
var path = require("path");
var port = 5000;
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
var cart = require('./cart');
app.use('/cart', cart);
var add = require('../../../add/add.js');
app.use('/add', add);
app.listen(port, function () {
  console.log("Server running at http://localhost:".concat(port, "/"));
});