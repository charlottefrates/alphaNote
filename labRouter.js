'use strict';

const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {Experiment} = require('./models');


router.get('/:id', (req, res) => {
  res.sendFile(__dirname + '/public/edit-experiments.html');
});


//path to see JSON objects
router.get('/', (req, res) => {
  Experiment
    .find(/*{author: "Charlotte"}*/)
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
  console.log (req);
  const requiredFields = ['title','purpose','procedure','results','conclusion'];
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
        title: req.body.title,
        author: "Charlotte",
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
  const updateableFields = [ 'title','purpose','procedure','results','conclusion'];
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
