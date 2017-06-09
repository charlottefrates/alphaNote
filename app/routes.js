// app/routes.js

var path = require('path');
var morgan   = require('morgan');

module.exports = function(app, passport) {

	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../views', 'index.html'));
	});


	// =====================================
	// LOGIN ===============================
	// =====================================
	// show the login form
	app.get('/login', function(req, res) {

		res.sendFile(path.join(__dirname, '../views', 'login.html'));
	});

	// process the login form
	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/dashboard', // redirect to the secure profile section
		failureRedirect : '/login', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// =====================================
	// SIGNUP ==============================
	// =====================================
	// show the signup form
	app.get('/signup', function(req, res) {

		res.sendFile(path.join(__dirname, '../views', 'signup.html'));
	});

	// process the signup form
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/dashboard', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// =====================================
	// PROFILE SECTION =========================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
  //dashboard after log-in
  app.get('/dashboard',
    require('connect-ensure-login').ensureLoggedIn(),
    function(req, res){
      //user : req.user, // get the user out of session and pass to template
      res.sendFile(path.join(__dirname, '../views', 'dashboard.html'));
    }
  );

  //creates new experiments
  app.get('/new-experiment',
    require('connect-ensure-login').ensureLoggedIn(),
    function(req, res){
      res.sendFile(path.join(__dirname, '../views', 'new-experiments.html'));
    }
  );

  // app.get('/:id', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../views', 'edit-experiments.html'));
  // });


	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		console.log("Logging off");
		req.logout();
		res.redirect('/');
	});
};

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}
