const mongoose = require('mongoose');

const experimentSchema = mongoose.Schema({
     category: {
          type: String,
          required: true
     },
     title: {
          type: String,
          required: true
     },
     purpose: String,
     procedure: String,
     results: {
          text: String,
          drawing: {title:String,
               drawing:String},
          molecule: {title:String,
               drawing:String}
     },
     conclusion: String,
     author: {
          firstName: String,
          lastName: String
     },
     created: {
          type: Date,
          default: Date.now
     }
});

experimentSchema.virtual('authorName').get(function() {
     return `${this.author.firstName} ${this.author.lastName}`.trim();
});

experimentSchema.methods.apiRepr = function() {
     return {
          id: this._id,
          category: this.category,
          title: this.title,
          purpose: this.purpose,
          procedure: this.procedure,
          results: this.results,
          conclusion: this.conclusion,
          author: this.authorName,
          created: this.created
     };
}

const Experiment = mongoose.model('Experiment', experimentSchema);

module.exports = {Experiment};
