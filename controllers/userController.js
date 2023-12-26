import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import bcrypt from 'bcrypt';
import Project from "../models/projectsModel.js";

const extractUserIdFromToken = (token) => {
  const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
  return decodedToken.userId;
};

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({ user: user._id });
  } catch (error) {
    let errors2 = {};
    if (error.code === 11000) {
      errors2.email = 'The Email is already registered';
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

    if (!user) {
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
        path: '/', // Set to the path relevant to your application
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

const updateUserVotedProjects = async (userId, projectNumber) => {
  try {
    await User.updateOne(
      { _id: userId },
      { $addToSet: { votedProjects: projectNumber } }
    );
  } catch (error) {
    console.error('Error updating user voted projects:', error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};

const submitVote = async (req, res) => {
  try {
    const userId = extractUserIdFromToken(req.cookies.jwt);
    const { selectedProjectNumber, selectedStars } = req.body;

    const user = await User.findById(userId);

    if (user.votedProjects.includes(selectedProjectNumber)) {
      console.error('Already voted error:', 'You have already voted for this project.');
      return res.status(400).json({ success: false, error: 'You have already voted for this project.' });
    }

    // Find the project based on projectid
    const project = await Project.findOne({ projectid: selectedProjectNumber });

    if (!project) {
      return res.status(400).json({ success: false, error: 'Selected project not found.' });
    }else

    // Update the totalVotes field
    project.totalVotes += 1;

    // Update the starsGiven field
    project.starsGiven += selectedStars;

    // Save the changes
    await project.save();

    // Update user's votedProjects
    await updateUserVotedProjects(userId, selectedProjectNumber);

    // Handle the vote submission logic here (if needed)

    res.status(200).json({ success: true, message: 'Vote submitted successfully.' });
  } catch (error) {
    console.error('Error submitting vote:', error);
    res.status(500).json({ success: false, error: 'Internal server error!' });
  }
};
function submitRating() {

  try {
    // Send a POST request to the server to submit the vote
    fetch('http://localhost:3000/users/vote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenValue}`,
      },
      body: JSON.stringify({ selectedProjectNumber, selectedStars }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.success) {
          alert('Vote submitted successfully.');
          resetRating(); // Reset stars after voting
        } else {
          // Check if the error message indicates that the user has already voted
          if (data.error && data.error.includes('already voted')) {
            alert('You have already voted for this project.');
          } else {
            alert(data.error || 'An error occurred.');
          }
        }
      })
      .catch(error => {
        console.error('Error submitting vote:', error);
      });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

const createToken = (userId) => {
  return jwt.sign({ userId }, process.env.SECRET_TOKEN, {
    expiresIn: "1d",
  });
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

const getALVotingPage = (req, res) => {
  res.render("afterlogvoting", {
    link: 'voting',
  });
};

const getProfilePage = (req, res) => {
  res.render("profile", {
    link: "profile",
  });
};



export { createUser, loginUser, getDashboardPage, getALVotingPage, getProfilePage, getProjectsPage, submitVote, submitRating};