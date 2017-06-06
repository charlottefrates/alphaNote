const mongoose = require('mongoose');

const experimentSchema = mongoose.Schema({
     author: {
          firstName: String,
          lastName: String
     },
     title: {
          type: String,
          required: true
     },
     purpose: String,
     background: String,
     procedure: String,
     results: {
          text: String,
          drawing: String,
          molecule: String
     },
     conclusion: String,
     created: {
          type: Date,
          default: Date.now
     },
     user_id: String,
     status:String,

});

experimentSchema.virtual('authorName').get(function() {
     return `${this.author.firstName} ${this.author.lastName}`.trim();
});

experimentSchema.virtual('date').get(function() {
     return `${this.created}`.slice(0,10);
});

//TODO: work on how you want to show RESULTS
experimentSchema.virtual('resultShow').get(function() {
     return `${this.results.text} ${this.results.drawing} ${this.results.molecule}`
});

experimentSchema.methods.apiRepr = function() {
     return {
          author: this.authorName, //uses virtual to set format
          id: this._id,
          title: this.title,
          background: this.background,
          purpose: this.purpose,
          procedure: this.procedure,
          results: this.results, //TODO
          conclusion: this.conclusion,
          created: this.date, //uses virtual to set format
          status: this.status,
          user_id: this.user_id
     };
}

const Experiment = mongoose.model('Experiment', experimentSchema);

module.exports = {Experiment};
