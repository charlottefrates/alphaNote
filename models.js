const mongoose = require('mongoose');

const experimentSchema = mongoose.Schema({
  category: {type: String, required: true},
  title: {type: String, required: true},
  author: {
    firstName: String,
    lastName: String
  },
  purpose: {type: String, required: true},
  procedure: {type: String, required: true},
  results: {},
  conclusion: {type: String, required: true},
  created: {type: Date, default: Date.now}
});

experimentSchema.virtual('authorName').get(function() {
  return `${this.author.firstName} ${this.author.lastName}`.trim();
});

experimentSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    category: this.category,
    title: this.title,
    author: this.authorName,
    purpose: this.title,
    procedure: this.procedure,
    results: this.results,
    conclusion: this.conclusion,
    created: this.created
  };
}

const experiment = mongoose.model('collection', experimentSchema);

module.exports = {experiment};
