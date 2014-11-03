
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
//TODO: cookie parser?

// load configurations for mongodb and passport
var passport = require('./config/passport');
var db = require('./config/mongodb');
var logger = require('./config/logger');

// save all the model classes into a single object
var model = {
  User: require('./models/user')
};

// create the express app that we will attach
// all our middleware to
var app = express();
app.use(bodyParser.json());
app.use(morgan('dev', { 'stream': logger.stream }));

app.use(function(req, res, next) {
  req.model = model;
  next();
});

app.use('/api', require('./controllers/index'));
//TODO figure out what other controllers are needed
app.use('/*', function(req, res) {
  var angular_index = __dirname + '/../../client/index.html';
  res.sendfile(angular_index);
  //TODO do I need to set up static stuff?
});


module.exports = app;