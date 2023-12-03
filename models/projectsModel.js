const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  projectid: {
    type: String,
    required: true
  },
  votes: {
    type: Number, default: 0
  },
  totalVotes: {
    type: Number, default: 0
  },

});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;