// app/routes.js

const path = require('path');
const morgan = require('morgan');

const {Experiment} = require('./models/experiment');
const User = require('./models/user');

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

     //templates with ejs file after npm install ejs
     app.set('view engine', 'ejs');

     // show the login form
     // .render allows for the "injection" of flash messages
     app.get('/login', function(req, res) {

          res.render('login', { message: req.flash('loginMessage') });

          //Orginally loads static html file
         //res.sendFile(path.join(__dirname, '../views', 'login.html'));

     });



     // process the login form
     app.post('/login', passport.authenticate('local-login', {
          successRedirect: '/dashboard', // redirect to the secure profile section
          failureRedirect: '/login', // redirect back to the signup page if there is an error
          //failureMessage: "Invalid username or password",
          failureFlash: true // allow flash messages


     }));

     // =====================================
     // SIGNUP ==============================
     // =====================================
     // show the signup form
     app.get('/signup', function(req, res) {

          res.sendFile(path.join(__dirname, '../views', 'signup.html'));
     });

     // process the signup form
     app.post('/signup',
     passport.authenticate('local-signup', {
          successRedirect: '/dashboard', // redirect to the secure profile section
          failureRedirect: '/signup', // redirect back to the signup page if there is an error
          failureFlash: true // allow flash messages
     }),
     (req,res) =>{
          res.json;
     }
     );




     // =====================================
     // Grabs User Info ========
     // =====================================

     app.get('/users', (req, res) => {
       return User
         .find()
         .exec()
         .then(users => res.json(users.map(user => user.apiRepr())))
         .catch(err => console.log(err) && res.status(500).json({message: 'Internal server error'}));
     });

     // =====================================
     // For test ========
     // =====================================

     app.get('/json/test', (req, res) => {
       Experiment
         .find()
         .sort({created: -1})
         .exec()
         .then(experiments => {
           res.json(experiments.map(experiment => experiment.apiRepr()));
         })
         .catch(err => {
           console.error(err);
           res.status(500).json({error: 'something went terribly wrong'});
         });
     });



     // =====================================
     // PROFILE SECTION =========================
     // =====================================
     // we will want this protected so you have to be logged in to visit
     // we will use route middleware to verify this (the isLoggedIn function)
     //dashboard after log-in
     app.get('/dashboard',
          require('connect-ensure-login').ensureLoggedIn(),
          function(req, res) {
               //user : req.user, // get the user out of session and pass to template
               res.sendFile(path.join(__dirname, '../views', 'dashboard.html'));
          }
     );

     //creates new experiments
     app.get('/new-experiment',
          require('connect-ensure-login').ensureLoggedIn(),
          function(req, res) {
               res.sendFile(path.join(__dirname, '../views', 'new-experiments.html'));
          }
     );

     // =====================================
     // LOGOUT ==============================
     // =====================================
     app.get('/logout', function(req, res) {
          console.log("Logging off");
          req.logout();
          res.redirect('/');
     });


     // =====================================
     // labapp Section ===================
     // =====================================

     //path to see JSON objects
     //NOTE: ADDED user filter
     app.get('/experiments', (req, res) => {
          let user = req.user;
          let userid = user._id;
          console.log(user);
          console.log(userid);

          Experiment
               .find( {user_id: userid})
               .sort({
                    created: 1
               }) //sorts recent date first
               .exec()
               .then(experiments => {
                    res.json(experiments.map(experiment => experiment.apiRepr()));
               })
               .catch(err => {
                    console.error(err);
                    res.status(500).json({
                         error: 'something went terribly wrong'
                    });
               });
     });

     //NOTE: NEW grab all experiments despite user
     app.get('/all', (req, res) => {
          Experiment
               .find( )
               .sort({
                    created: 1
               }) //sorts recent date first
               .exec()
               .then(experiments => {
                    res.json(experiments.map(experiment => experiment.apiRepr()));
               })
               .catch(err => {
                    console.error(err);
                    res.status(500).json({
                         error: 'something went terribly wrong'
                    });
               });
     });


       // edits new experiments
       app.get('/:id',
         require('connect-ensure-login').ensureLoggedIn(),
         function(req, res){
           res.sendFile(path.join(__dirname, '../views', 'edit-experiments.html'));
         }
       );

       //grabs pre-existing experiment JSON data
       app.get('/:id/json', (req, res) => {
           Experiment
                .findById(req.params.id)
                .exec()
                .then(experiment => res.json(experiment.apiRepr()))
                .catch(err => {
                     console.error(err);
                     res.status(500).json({
                          error: 'something went horribly awry'
                     });
                });
      });



     //POST reqeust with specified requirements
     //NOTE: added user ID field
     // when a new experiment is posted, make sure it has required content.
     // if not,log an error and return a 400 status code. if okay,
     // add new item to experiment and return it with a 201.
     app.post('/new', (req, res) => {
          let user = req.user;
          console.log(user);
          console.log(req);
          console.log(res);
          const requiredFields = ['title', 'purpose', 'procedure', 'results', 'conclusion'];
          for (let i = 0; i < requiredFields.length; i++) {
               const field = requiredFields[i];
               if (!(field in req.body)) {
                    const message = `Missing \`${field}\` in request body`
                    console.error(message);
                    return res.status(400).send(message);
               }
          }
          console.log(req.session);
          Experiment
               .create({
                    title: req.body.title,
                    author: req.session.firstName + " " + req.session.lastName,
                    background: req.body.background,
                    purpose: req.body.purpose,
                    procedure: req.body.procedure,
                    results: req.body.results,
                    conclusion: req.body.conclusion,
                    created: req.body.created,
                    status: req.body.status,
                    user_id:user._id
               })
               .then(experimentEntry => res.status(201).json(experimentEntry.apiRepr()))
               .catch(err => {
                    console.error(err);
                    res.status(500).json({
                         error: 'Something went wrong'
                    });
               });

     });


     app.post('/new/test', (req, res) => {
          //console.log(req);
          //let user = req.user;
          const requiredFields = ['title', 'purpose', 'procedure', 'results', 'conclusion'];
          requiredFields.forEach(field => {
            if (!(field in req.body)) {
              res.status(400).json(
                {error: `Missing "${field}" in request body`});
            }});
          //console.log(req.session);
          Experiment
               .create({
                    title: req.body.title,
                    author: req.session.firstName + " " + req.session.lastName,
                    background: req.body.background,
                    purpose: req.body.purpose,
                    procedure: req.body.procedure,
                    results: req.body.results,
                    conclusion: req.body.conclusion,
                    created: req.body.created,
                    status: req.body.status,
                    user_id:req.body.user_id
               })
               .then(experimentEntry => res.status(201).json(experimentEntry.apiRepr()))
               .catch(err => {
                    console.error(err);
                    res.status(500).json({
                         error: 'Something went wrong'
                    });
               });

     });



     app.put('/edit/:id', (req, res) => {
          if (!(req.params.id && req.body.id && req.params.id === req.body.id)) {
               res.status(400).json({
                    error: 'Request path id and request body id values must match'
               });
          }

          const updated = {};
          const updateableFields = ['title', 'purpose', 'procedure', 'results', 'conclusion', 'status', 'background'];
          updateableFields.forEach(field => {
               if (field in req.body) {
                    updated[field] = req.body[field];
               }
          });

          Experiment
               .findByIdAndUpdate(req.params.id, {
                    $set: updated
               }, {
                    new: true
               })
               .exec()
               .then(updatedPost => res.status(201).json(updatedPost.apiRepr()))
               .catch(err => res.status(500).json({
                    message: 'Something went wrong'
               }));
     });

     app.delete('/delete/:id', (req, res) => {
          Experiment
               .findByIdAndRemove(req.params.id)
               .exec()
               .then(() => {
                    res.status(204).json({
                         message: 'success'
                    });
               })
               .catch(err => {
                    console.error(err);
                    res.status(500).json({
                         error: 'something went terribly wrong'
                    });
               });
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
