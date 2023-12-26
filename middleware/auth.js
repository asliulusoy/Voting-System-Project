// auth.js

import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const checkUser = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.SECRET_TOKEN, async (err, decodedToken) => {
      if (err) {
        console.log('Error verifying token: ', err);
        res.locals.user = null;
        next();
      } else {
        const user = await User.findById(decodedToken.userId);
        res.locals.user = user;

        // Kullanıcı giriş yapmışsa ve giriş yaptığı sayfa index ise direkt olarak dashboard'a yönlendir
        if (req.originalUrl === '/' && user) {
          res.redirect('/users/dashboard');
        } else {
          next();
        }
      }
    });
  } else {
    res.locals.user = null;

    // Kullanıcı giriş yapmamışsa ve isteği index sayfasıysa, direkt olarak dashboard sayfasına yönlendir
    if (req.originalUrl === '/') {
      res.redirect('/users/dashboard');
    } else {
      next();
    }
  }
};

const authenticateToken = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (token) {
      jwt.verify(token, process.env.SECRET_TOKEN, (err) => {
        if (err) {
          console.log(err.message);
          // Redirect the user to the login page only if the URL is not already the login page
          if (req.originalUrl !== '/login') {
            res.redirect("/login");
          } else {
            next(); // Continue to the next middleware if already on the login page
          }
        } else {
          next();
        }
      });
    } else {
      // Redirect the user to the login page only if the URL is not already the login page
      if (req.originalUrl !== '/login') {
        res.redirect("/login");
      } else {
        next(); // Continue to the next middleware if already on the login page
      }
    }
  } catch (error) {
    res.status(401).json({
      succeeded: false,
      error: "Not authorized"
    });
  }
};

export { authenticateToken, checkUser };
