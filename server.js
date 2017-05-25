'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

const {DATABASE_URL, PORT} = require('./config');
const {experiment} = require('./models');
const {router: usersRouter} = require('./users');
const labRouter = require('./labRouter');

const app = express();



app.use(morgan('common'));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(session({ secret: 'alphaNote',resave: true,saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


//routers
app.use('/users/', usersRouter);

app.use('/experiments', labRouter);



mongoose.Promise = global.Promise;

//landing page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

//dashboard after log-in
app.get('/dashboard',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
      //res.send('Hello dashboard');
    res.sendFile(__dirname + '/public/dashboard.html');
  }
);

//shows collection of experiments
app.get('/experiments',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.sendFile(__dirname + '/public/experiments.html');
  }
);

//creates new experiments
app.get('/experiments/new',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.sendFile(__dirname + '/public/new-experiment.html');
  }
);

//logout
app.get('/logout', function (req, res,next){
  console.log("logging out");
  req.logOut();
  req.session.destroy(function (err) {
        res.redirect('/'); //Inside a callback… bulletproof!
    });
    console.log(req.user);
});


app.use('*', function(req, res) {
  res.status(404).json({message: 'Not Found'});
});

// closeServer needs access to a server object, but that only
// gets created when `runServer` runs, so we declare `server` here
// and then assign a value to it in run
let server;

// this function connects to our database, then starts the server
function runServer() {
  return new Promise((resolve, reject) => {
    mongoose.connect(DATABASE_URL, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(PORT, () => {
        console.log(`Your app is listening on port ${PORT}`);
        resolve();
      })
      .on('error', err => {
        mongoose.disconnect();
        reject(err);
      });
    });
  });
}

// this function closes the server, and returns a promise. we'll
// use it in our integration tests later.
function closeServer() {
  return mongoose.disconnect().then(() => {
     return new Promise((resolve, reject) => {
       console.log('Closing server');
       server.close(err => {
           if (err) {
               return reject(err);
           }
           resolve();
       });
     });
  });
}

// if server.js is called directly (aka, with `node server.js`), this block
// runs. but we also export the runServer command so other code (for instance, test code) can start the server as needed.
if (require.main === module) {
  runServer().catch(err => console.error(err));
};

module.exports = {app, runServer, closeServer};
