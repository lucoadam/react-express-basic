var express = require('express');
var http = require('http');
var app = express();

app.use(express.static(__dirname + '/dist'));

http.createServer(app).listen(3000);
