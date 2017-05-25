'use strict';

const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {Experiment} = require('./models');

/*
// when the root of this router is called with GET, return
// all current experiment collection
// endpoint diff but gets routed to /experiments by server.js
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/experiments.html');
});

router.get('/new', (req, res) => {
  let user = req.user;
  let userid = user._id
  //TODO make new-experiment.html file and associated assets(.js & .css)
  res.sendFile(__dirname + '/public/new-experiment.html');
});

router.get('/:id', (req, res) => {
  //TODO make new-experiment.html file and associated assets(.js & .css)
  res.sendFile(__dirname + '/public/experiment-edit.html');
});
*/

//path to see JSON objects
router.get('/', (req, res) => {
  Experiment
    .find()
    .exec()
    .then(experiments => {
      res.json(experiments.map(experiment => experiment.apiRepr()));
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'something went terribly wrong'});
    });
});

//POST reqeust with specified requirements
// when a new experiment is posted, make sure it has required content.
// if not,log an error and return a 400 status code. if okay,
// add new item to experiment and return it with a 201.
router.post('/new', (req, res) => {
  const requiredFields = ['category', 'title', 'author','purpose','procedure','results','conclusion'];
  for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`
      console.error(message);
      return res.status(400).send(message);
    }
  }

  Experiment
    .create({
        category: req.body.category,
        title: req.body.title,
        author: req.body.author,
        purpose: req.body.purpose,
        procedure: req.body.procedure,
        results: req.body.results,
        conclusion: req.body.conclusion,
        created: req.body.created
    })
    .then(experimentEntry => res.status(201).json(experimentEntry.apiRepr()))
    .catch(err => {
        console.error(err);
        res.status(500).json({error: 'Something went wrong'});
    });

});



router.put('/:id', (req, res) => {
  if (!(req.params.id && req.body.id && req.params.id === req.body.id)) {
    res.status(400).json({
      error: 'Request path id and request body id values must match'
    });
  }

  const updated = {};
  const updateableFields = ['category', 'title', 'author','purpose','procedure','results','conclusion'];
  updateableFields.forEach(field => {
    if (field in req.body) {
      updated[field] = req.body[field];
    }
  });

  Experiment
    .findByIdAndUpdate(req.params.id, {$set: updated}, {new: true})
    .exec()
    .then(updatedPost => res.status(201).json(updatedPost.apiRepr()))
    .catch(err => res.status(500).json({message: 'Something went wrong'}));
});

router.delete('/:id', (req, res) => {
  Experiment
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(() => {
      res.status(204).json({message: 'success'});
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'something went terribly wrong'});
    });
});



module.exports = router;