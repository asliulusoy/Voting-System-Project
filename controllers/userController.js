/*
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import bcrypt from 'bcrypt';

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            succeded: true,
            user,
        });
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        });
    }

};
const loginUser = async (req, res) => {
    try {
      const { stuid, password } = req.body;
  
      const user = await User.findOne({ stuid });
  
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
  
        res.redirect('/dashboard');
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
export { createUser, loginUser };
*/