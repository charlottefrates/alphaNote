// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8888; //TODO
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var morgan   = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration


	// set up our express application
	app.use(morgan('common')); // log every request to the console
	app.use(cookieParser()); // read cookies (needed for auth)
	//app.use(bodyParser.json()); // get information from html forms
	app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
	app.use(bodyParser.json()) // parse application/json

  app.use(express.static('public'));

  // required for passport
  app.use(session({ secret: 'alphaNote',resave: true,saveUninitialized: true})); // session secret
  app.use(passport.initialize());
  app.use(passport.session()); // persistent login sessions
  app.use(flash()); // use connect-flash for flash messages stored in session

  // routes ======================================================================
  require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

  // launch ======================================================================
  app.listen(port);
  console.log('The magic happens on port ' + port);
