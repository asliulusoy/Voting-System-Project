import mongoose from 'mongoose';

const { Schema } = mongoose;

const projectSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  projectid: {
    type: String,
    required: true
  },
  totalVotes: {
    type: Number, 
    default: 0
  },
  starsGiven: {
    type: Number,
    default: 0
  },

});

const Project = mongoose.model('Project', projectSchema);

export default Project;