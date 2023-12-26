import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import bcrypt from 'bcrypt';

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
      res.status(200).json({user: user._id});
    } catch (error) {

      let errors2 = {};
      if (error.code === 11000) {
        errors2.email = 'The Email is already registered';
      }
      if (error.name ==="ValidationError"){
        Object.keys(error.errors).forEach((key)=>{
          errors2[key]= error.errors[key].message;
        });
      }
        res.status(400).json(errors2);
    }

};
const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email });
  
      let same = false;
  
      if (user) {
        same = await bcrypt.compare(password, user.password);
      } else {
        return res.status(401).json({
          succeded: false,
          error: 'There is no such user',
        });
      }
  
      if (same) {
        const token = createToken(user._id);
        res.cookie('jwt', token, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24,
        });
        res.redirect('/users/dashboard');
        
      } else {
        res.status(401).json({
          succeded: false,
          error: 'Paswords are not matched',
        });
      }
    } catch (error) {
      res.status(500).json({
        succeded: false,
        error,
      });
    }
  };



const createToken = (userId) => {
    return jwt.sign({ userId }, process.env.SECRET_TOKEN, {
        expiresIn: "1d",
    });
}
const submitVote = async (req, res) => {
  try {
    const userId = extractUserIdFromToken(req.cookies.jwt);
    const { selectedProjectNumber, selectedStars } = req.body;

    // Check if the user has already voted for the selected project
    const user = await User.findById(userId);

    if (user.votedProjects.includes(selectedProjectNumber)) {
      return res.status(400).json({ success: false, error: 'You have already voted for this project.' });
    }

    // Update the user's votedProjects array
    user.votedProjects.push(selectedProjectNumber);
    await user.save();

    // Handle the vote submission logic here (e.g., update project votes in the database)

    res.status(200).json({ success: true, message: 'Vote submitted successfully.' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
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
      User,
  });
};

const extractUserIdFromToken = (token) => {
  const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
  return decodedToken.userId;
};

export { createUser, loginUser, getDashboardPage, getALVotingPage, getProfilePage, getProjectsPage,submitVote};