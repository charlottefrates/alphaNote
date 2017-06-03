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
          default: function(){return +new Date() + 7*24*60*60*1000}
     },
     user_id: String,
     status:0,

});

experimentSchema.virtual('authorName').get(function() {
     return `${this.author.firstName} ${this.author.lastName}`.trim();
});

experimentSchema.virtual('date').get(function() {
     //TODO
});

experimentSchema.methods.apiRepr = function() {
     return {
          author: this.authorName, //uses virtual to set format
          id: this._id,
          title: this.title,
          purpose: this.purpose,
          procedure: this.procedure,
          results: this.results,
          conclusion: this.conclusion,
          created: this.created, // TODO: figure out how to reformat date virtual
          status: this.status,
          user_id: this.user_id
     };
}

const Experiment = mongoose.model('Experiment', experimentSchema);

module.exports = {Experiment};
