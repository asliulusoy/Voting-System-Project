import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import User from "../models/userModel.js";
import Project from "../models/projectsModel.js";



const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({ user: user._id });
  } catch (error) {
    let errors2 = {};
    if (error.code === 11000) {
      // MongoDB'den gelen benzersizlik (unique) hatası
      if (error.keyPattern.stuid) {
        errors2.stuid = 'The Student ID is already registered';
      }

      if (error.keyPattern.email) {
        errors2.email = 'The Email is already registered';
      }
    }
    if (error.name === "ValidationError") {
      Object.keys(error.errors).forEach((key) => {
        errors2[key] = error.errors[key].message;
      });
    }
    res.status(400).json(errors2);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) { // !email match
      return res.status(401).json({
        succeeded: false,
        error: 'There is no such user',
      });
    }

    const same = await bcrypt.compare(password, user.password);

    if (same) {
      const token = createToken(user._id);
      res.cookie('jwt', token, {
        maxAge: 1000 * 60 * 60 * 24,
      });
      res.redirect('/users/dashboard');
    } else {
      res.status(401).json({
        succeeded: false,
        error: 'Passwords do not match',
      });
    }
  } catch (error) {
    res.status(500).json({
      succeeded: false,
      error,
    });
  }
};

const updateUserVotedProjects = async (userId, projectNumber, starsGiven) => {
  try {
    await User.updateOne(
      { _id: userId },
      {
        $addToSet: {
          votedProjects: { projectNumber, starsGiven }
        }
      }
    );
  } catch (error) {
    console.error('Error updating user voted projects:', error);
    throw error;
  }
};
const submitVote = async (req, res) => {
  try {
    const userId = extractUserIdFromToken(req.cookies.jwt); //objectid from mongodb
    const { selectedProjectNumber, selectedStars } = req.body;

    const user = await User.findById(userId);

    if (user.votedProjects.some(project => project.projectNumber === selectedProjectNumber)) {
      return res.status(400).json({ success: false, error: 'AlreadyVoted', message: 'submitVote error: You have already voted for this project.' });
  }

    // Find the project based on projectid
    const project = await Project.findOne({ projectid: selectedProjectNumber });

    if (!project) {
      return res.status(400).json({ success: false, error: 'Selected project not found.' });
    } else

      // Update the totalVotes field
      project.totalVotes += 1;

    // Update the starsGiven field
    project.starsGiven += selectedStars;

    // Save the changes
    await project.save();

    // Update user's votedProjects
    await updateUserVotedProjects(userId, selectedProjectNumber, selectedStars);

    res.status(200).json({ success: true, message: 'Vote submitted successfully.' });
  } catch (error) {
    console.error('Error submitting vote:', error);
    res.status(500).json({ success: false, error: 'Internal server error!' });
  }
};

const calculateResultVote = async (projectNumber) => {
  try {
    // Find the project based on projectid
    const project = await Project.findOne({ projectid: projectNumber });

    if (!project) {
      throw new Error(`Project with projectNumber ${projectNumber} not found.`);
    }

    // Check if totalVotes is zero to avoid division by zero
    if (project.totalVotes === 0) {
      // Set resultVote to 0 when totalVotes is 0
      const resultVote = 0;
      return resultVote;
    }

    // Calculate the result vote
    const resultVote = project.starsGiven / project.totalVotes;

    return resultVote;
  } catch (error) {
    console.error('Error calculating result vote:', error);
    throw error; // Rethrow the error to handle it in the calling function or return a default value
  }
};
const createToken = (userId) => {
  return jwt.sign({ userId }, process.env.SECRET_TOKEN, {
    expiresIn: "1d",
  });
};
const extractUserIdFromToken = (token) => {
  const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
  return decodedToken.userId;
};

// AFTER LOGIN (AL)
const getDashboardPage = async (req, res) => {
  res.render('dashboard', {
    link: 'dashboard',
  });
};

const getProjectsPage = (req, res) => {
  res.render("projects", {
    link: 'projects',
  });
};

const getResultsPage = async (req, res) => {
  try {
    // Get voting results for all projects
    // You may need to adjust the logic to get results for all projects based on your database structure
    const allProjects = await Project.find(); // Update this line based on your database model

    // Calculate result vote for each project
    const resultVotes = await Promise.all(
      allProjects.map(async (project) => {
        const resultVote = await calculateResultVote(project.projectid);
        return { projectNumber: project.projectid, resultVote };
      })
    );

    // Render the EJS file and pass the resultVotes and link as variables
    res.render('results.ejs', { resultVotes, link: 'results' }); // Pass the link variable
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Internal Server Error');
  }
};

const getProfilePage = (req, res) => {
  res.render("profile", {
    link: "profile",
  });
};





export { createUser, loginUser, getDashboardPage, getResultsPage, getProfilePage, getProjectsPage, submitVote, calculateResultVote };