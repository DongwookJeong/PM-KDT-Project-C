// const fs = require('fs');
import fs from "fs";
import http from "http";

console.dir(http);

const server = http.createServer((req, res)=>{
  res.writeHead(200, {"content-type": "application/json"});
  res.end(
    JSON.stringify({
      message: "ff"
    }, null,2)
  )
})