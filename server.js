// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8888;
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




// 'use strict';
//
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const morgan = require('morgan');
// const passport = require('passport');
// const flash = require('connect-flash');
// const session = require('express-session');
// //const expressLogout = require('express-passport-logout');
//
// const {DATABASE_URL, PORT} = require('./config');
// const {Experiment} = require('./models');
// const {router: usersRouter} = require('./users/router');
// const labRouter = require('./labRouter');
//
// const app = express();
//
//
//
// app.use(morgan('common'));
// app.use(bodyParser.json());
//
// app.use(express.static('public'));
//
// app.use(session({ secret: 'alphaNote',resave: true,saveUninitialized: true}));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());
//
//
// //routers
// app.use('/users/', usersRouter);
//
// app.use('/experiments', labRouter);
//
//
//
// mongoose.Promise = global.Promise;
//
// //landing page
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/public/index.html');
// });
//
// //dashboard after log-in
// app.get('/dashboard',
//   require('connect-ensure-login').ensureLoggedIn(),
//   function(req, res){
//       //res.send('Hello dashboard');
//     res.sendFile(__dirname + '/public/dashboard.html');
//   }
// );
//
//
// //creates new experiments
// app.get('/new-experiment',
//   require('connect-ensure-login').ensureLoggedIn(),
//   function(req, res){
//     res.sendFile(__dirname + '/public/new-experiments.html');
//   }
// );
//
// app.get('/:id', (req, res) => {
//   res.sendFile(__dirname + '/public/edit-experiments.html');
// });
//
//
//
//
// //logout
// app.get('/logout', function (req, res){
//
//   console.log("logging out");
// //console.log(req);
//   req.logout();
//   res.clearCookie('connect.sid');
//   req.session.destroy(function (err) {
//         res.redirect('/'); //Inside a callback… bulletproof!
//     });
//     //console.log(req.user);
// });
//
//
// //app.get('/logout', expressLogout());
//
//
// app.use('*', function(req, res) {
//   res.status(404).json({message: 'Not Found'});
// });
//
// // closeServer needs access to a server object, but that only
// // gets created when `runServer` runs, so we declare `server` here
// // and then assign a value to it in run
// let server;
//
// // this function connects to our database, then starts the server
// function runServer() {
//   return new Promise((resolve, reject) => {
//     mongoose.connect(DATABASE_URL, err => {
//       if (err) {
//         return reject(err);
//       }
//       server = app.listen(PORT, () => {
//         console.log(`Your app is listening on port ${PORT}`);
//         resolve();
//       })
//       .on('error', err => {
//         mongoose.disconnect();
//         reject(err);
//       });
//     });
//   });
// }
//
// // this function closes the server, and returns a promise. we'll
// // use it in our integration tests later.
// function closeServer() {
//   return mongoose.disconnect().then(() => {
//      return new Promise((resolve, reject) => {
//        console.log('Closing server');
//        server.close(err => {
//            if (err) {
//                return reject(err);
//            }
//            resolve();
//        });
//      });
//   });
// }
//
// // if server.js is called directly (aka, with `node server.js`), this block
// // runs. but we also export the runServer command so other code (for instance, test code) can start the server as needed.
// if (require.main === module) {
//   runServer().catch(err => console.error(err));
// };
//
// module.exports = {app, runServer, closeServer};
