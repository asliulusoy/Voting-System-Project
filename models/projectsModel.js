const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // Diğer özellikler...
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;