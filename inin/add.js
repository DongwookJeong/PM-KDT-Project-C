"use strict";

var express = require("express");
// const { connect } = require("http2");
var imgRouter = require('../routes/img');
var app = express();
var mysql = require("mysql");
var path = require("path");
var router = express.Router();
var adddwSql = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'kdt305',
  database: 'adddw'
});
app.use('/add', imgRouter);
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});
router.post('/', function (req, res) {
  var body = req.body;
  var title = body.title;
  var data = body.data;
  var content = body.content;
  // let sql = 
  adddwSql.query("insert into addwt(title,content) values(\"".concat(title, "\",\"").concat(content, "\");"), function (err) {
    if (err) {
      console.log(err);
    }
    res.redirect('/add');
  });
});
module.exports = router;
// ? 잠시 들어가 있어
// app.get('/feel', (req, res)=>{

//     adddwSql.query(`select * from addwt;`, function(err, result){
//         if(err){
//             console.log(err)
//         }else{
//             res.send(result)
//         }
//     })

// })