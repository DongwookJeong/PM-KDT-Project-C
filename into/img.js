"use strict";

var express = require('express');
var multer = require('multer');
var fs = require('fs');
var path = require('path');
var router = express.Router();
fs.readdir('uploads', function (err) {
  if (err) {
    fs.mkdirSync('uploads');
  }
});
var upload = multer({
  storage: multer.memoryStorage({
    destination: function destination(req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function filename(req, file, cb) {
      var ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    }
  }),
  limits: {
    fileSize: 5 * 1024 * 1024
  }
});
router.post('/upload', upload.single('img'), function (req, res) {
  console.log(req.file);
  res.json({
    url: "/".concat(req.file.filename)
  });
});
module.exports = router;