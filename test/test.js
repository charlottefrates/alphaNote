const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const mongoose = require('mongoose');


/*const {Experiment, User} = require('./models');*/
const {app} = require('../server');



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
  const status = ['pending', 'complete'];
  return status[Math.floor(Math.random() * status.length)];
};

function generateExperimentData() {
  return {
    title: faker.lorem.sentence(),
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
    status: generateStatus()
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
}

describe('alphaNote API resource',function(){

});

describe('GET endpoint', function() {
  it('should return all existing experiments', function() {
    // strategy:
    //    1. get back all dreams returned by GET request to `/all`
    //    2. prove res has right status, data type
    //    3. prove the number of dreams we got back is equal to number
    //       in db.
    //
    // need to have access to mutate and access `res` across
    // `.then()` calls below, so declare it here so can modify in place
    let res;
    return chai.request(app)
      .get('/all')
      .then(function(_res) {
        // so subsequent .then blocks can access resp obj.
        res = _res;
        res.should.have.status(200);
        res.should.be.json;
        // otherwise our db seeding didn't work
        res.body.should.have.length.of.at.least(1);
        return Experiment.count();
      })
      .then(function(count) {
        res.body.should.have.length.of(count);
      });
  });

  it('should return experiments with right fields', function() {
    // Strategy: Get back all dreams, and ensure they have expected keys
    let resExperiment;
    return chai.request(app)
      .get('/all')
      .then(function(res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.should.have.length.of.at.least(1);
        res.body.forEach(function(experiment) {
          experiment.should.be.a('object');
          experiment.should.include.keys(
            'id', 'title', 'background', 'purpose', 'procedure','results','conclusion');
        });
        resExperiment = res.body[0];
        return Experiment.findById(resExperiment.id);
      })
      .then(function(experiment) {
        resExperiment.id.should.equal(experiment.id);
        resExperiment.title.should.equal(experiment.title);
        resExperiment.background.should.equal(experiment.background);
        resExperiment.purpose.should.equal(experiment.purpose);
        resExperiment.procedure.should.equal(experiment.procedure);
        resExperiment.results.should.equal(experiment.results);
        resExperiment.conclusion.should.equal(experiment.conclusion)

      });
  });
});
