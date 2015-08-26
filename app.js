'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/archeology-test', {db: {safe: true}});
mongoose.set('debug', true);
var seed = require('./seedDB');
var app = express();
var server = require('http').createServer(app);

require('./api')(app);

app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.use(bodyParser.json({limit: "50mb"}));

server.listen(9000, "0.0.0.0", function () {
  console.log('Express server listening on %d, in %s mode', 9000, app.get('env'));
});

exports = module.exports = app;