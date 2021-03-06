process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const mongoose = require('mongoose');

// this makes the should syntax available throughout
// this module
const should = chai.should();



chai.use(chaiHttp);

let { Experiment } = require('../app/models/experiment');
const User = require('../app/models/user');
const { app } = require('../server');
var passport = require('passport');
let req = {
            user: {
                    _id:'5940353e31afee1204e02098'
                  }
          };
function seedExperimentData() {
  console.info('seeding experiment entry data');
  const seedData = [];

  for (let i=1; i<=10; i++) {
    seedData.push(generateExperimentData());
  }
  // this will return a promise
  return Experiment.insertMany(seedData);
};

function generateStatus() {
  const status = ['Pending', 'Complete'];
  return status[Math.floor(Math.random() * status.length)];
};

function generateExperimentData() {
  return {
    title: faker.lorem.sentence(),
    author:{
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    },
    purpose: faker.lorem.paragraphs(),
    background:faker.lorem.paragraphs(),
    procedure:faker.lorem.paragraphs(),
    results:{
      text: faker.lorem.paragraph(),
      drawing: faker.lorem.text(),
      molecule: faker.lorem.text(),
    },
    conclusion: faker.lorem.paragraph(),
    created: faker.date.past(),
    status: generateStatus(),
    user_id: req.user._id
  }
};

function generateUser() {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    username: faker.random.word(),
    password: faker.random.alphaNumeric()
  }
};

function tearDownDb() {
    console.warn('Deleting database');
    return mongoose.connection.dropDatabase();
};

describe('App', function() {
  describe('/', function() {
    it('responds with status 200', function(done) {
      chai.request(app)
        .get('/all')
        .end(function(err, _res) {
          res = _res;
          res.should.have.status(200)
          done();
        });
    });
  });
});



describe('Post endpoint', function(){
  it('should add an experiment', function(done) {
    const newExperiment = generateExperimentData();
    //identifies additional response
    const expectedKeys = ['id'].concat(Object.keys(newExperiment));

    chai.request(app)
      .post('/new/test')
      .send(newExperiment)
      .end(function(err, res) {
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.all.keys(expectedKeys);
        res.body.id.should.not.be.null;
        res.body.title.should.equal(newExperiment.title);
        //res.body.author.firstName.should.equal(newExperiment.author.firstName);
        //res.body.author.lastName.should.equal(newExperiment.author.lastName);
        res.body.background.should.equal(newExperiment.background);
        res.body.purpose.should.equal(newExperiment.purpose);
        res.body.procedure.should.equal(newExperiment.procedure);
        res.body.results.text.should.equal(newExperiment.results.text);
        res.body.results.drawing.should.equal(newExperiment.results.drawing);
        res.body.results.molecule.should.equal(newExperiment.results.molecule);
        res.body.conclusion.should.equal(newExperiment.conclusion);
        res.body.user_id.should.equal(newExperiment.user_id);

      });
      done();
  });

    it('should error if POST missing expected values', function() {
       const badRequestData = {};
       chai.request(app)
         .post('/new')
         .send(badRequestData)
         .end(function(err, res) {
           res.should.have.status(400);
         })
       });


});




describe('PUT endpoint', function() {
  // strategy:
  //  1. Get an existing experiment from db
  //  2. Make a PUT request to update
  //  3. Prove experiment returned by request contains data we sent
  //  4. Prove experiment in db is correctly updated
  it('should update fields you send over', function() {
    const updateData = {
      title: "My Title",
      author: {
                       firstName: 'foo',
                       lastName: 'bar'
                  },
      background: "",
      purpose: "My purpose",
      procedure: "My procedure",
      results: {
        text: "My text",
        drawing: "My drawing",
        molecule: "My molecule",
      },
      conclusion: "My conclusion",
      status: "pending",
      user_id: req.user._id
    };

    return Experiment
      .findOne()
      .exec()
      .then(function(experiment) {
        updateData.id = experiment.id;

        // make request then inspect it to make sure it reflects
        // data we sent
        return chai.request(app)
          .put(`/edit/${experiment.id}`)
          .send(updateData);
      })
      .then(function(res) {
        res.should.have.status(201);
        res.should.be.json;
        return Experiment.findById(updateData.id).exec();
      })
      .then(function(experiment) {
        experiment.title.should.equal(updateData.title);
        experiment.background.should.equal(updateData.background);
        experiment.purpose.should.equal(updateData.purpose);
        experiment.procedure.should.equal(updateData.procedure);
        experiment.results.text.should.equal(updateData.results.text);
        experiment.results.drawing.should.equal(updateData.results.drawing);
        experiment.results.molecule.should.equal(updateData.results.molecule);
        experiment.conclusion.should.equal(updateData.conclusion);
        experiment.status.should.equal(updateData.status);
        //experiment.user_id.should.equal(updateData.user_id);
      });
    });
});

describe('GET endpoint', function() {
     it('should return all existing experiments', function() {
          // strategy:
          //    1. get back all restaurants returned by by GET request to `/restaurants`
          //    2. prove res has right status, data type
          //    3. prove the number of restaurants we got back is equal to number
          //       in db.
          //
          // need to have access to mutate and access `res` across
          // `.then()` calls below, so declare it here so can modify in place
          let res;
          // this line of code days that re are returning a PROMISE
          return chai.request(app)
               .get('/json/test')
               .then(function(_res) {
                    console.log(_res, "RES");
                    res = _res;
                    res.should.have.status(200);
                    // otherwise our db seeding didn't work
                    res.body.should.have.length.of.at.least(1);
                    // check how many restaurants there are in db
                    return Experiment.count();
               })
               //uses value returned by blog.count in argument
               .then(function(count) {
                    res.body.should.have.length.of(count);
               });
     });

     it('should return experiments with right fields', function() {
          // Strategy: Get back all experiments, and ensure they have expected keys
          let resBlog;
          return chai.request(app)
               .get('/json/test')
               .then(function(res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('array');
                    res.body.should.have.length.of.at.least(1);

                    res.body.forEach(function(blog) {
                         blog.should.be.a('object');
                         blog.should.include.keys(
                           'id', 'title', 'author','background', 'purpose','results','procedure','conclusion');
                    });

                    resExperiment = res.body[0];
                    return Experiment.findById(resExperiment.id);
                  })
                  .then(function(experiment) {
                    resExperiment.id.should.equal(experiment.id);
                    resExperiment.title.should.equal(experiment.title);
                    resExperiment.author.should.equal(experiment.author);
                    resExperiment.background.should.equal(experiment.background);
                    resExperiment.purpose.should.equal(experiment.purpose);
                    resExperiment.procedure.should.equal(experiment.procedure);
                    resExperiment.results.text.should.equal(experiment.results.text);
                    resExperiment.results.drawing.should.equal(experiment.results.drawing);
                    resExperiment.results.molecule.should.equal(experiment.results.molecule);
                    resExperiment.conclusion.should.equal(experiment.conclusion);
                    resExperiment.user_id.should.equal(experiment.user_id)
               });
     });
});



describe('DELETE endpoint', function() {
  // strategy:
  //  1. get a experiment
  //  2. make a DELETE request for that experiment's id
  //  3. assert that response has right status code
  //  4. prove that experiment with the id doesn't exist in db anymore
  it('should delete a experiment by id', function() {
    let experiment;
    debugger;
    return Experiment
      .findOne()
      .exec()
      .then(function(_exp) {
        experiment = _exp;
        return chai.request(app).delete(`/delete/${experiment.id}`);
      })
      .then(function(res) {
        res.should.have.status(204);
        return Experiment.findById(experiment.id).exec();
      })
      .then(function(_exp) {
        should.not.exist(_exp);
      });
  });
});
