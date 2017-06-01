const mongoose = require('mongoose');

const experimentSchema = mongoose.Schema({
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
     created: {
          type: Date,
          default: Date.now
     },
     deleted:0,
     status:0,

});

experimentSchema.virtual('authorName').get(function() {
     return `${this.author.firstName} ${this.author.lastName}`.trim();
});

experimentSchema.methods.apiRepr = function() {
     return {
          id: this._id,
          title: this.title,
          purpose: this.purpose,
          procedure: this.procedure,
          results: this.results,
          conclusion: this.conclusion,
          created: this.created,
          deleted: this.deleted,
          status: this.status,
     };
}

const Experiment = mongoose.model('Experiment', experimentSchema);

module.exports = {Experiment};
