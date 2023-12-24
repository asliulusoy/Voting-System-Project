import express from 'express';
import * as userController from '../controllers/userController.js';
import * as pageController from '../controllers/pageController.js'
import * as auth from '../middleware/auth.js';

const router = express.Router();

router.route('/signup').post(userController.createUser);
router.route('/login').post(userController.loginUser);
router.route('/dashboard').get(auth.authenticateToken, userController.getDashboardPage);
router.route("/voting").get(auth.authenticateToken,userController.getALVotingPage);
router.route("/profile").get(auth.authenticateToken, userController.getProfilePage);
router.route("/projects").get(auth.authenticateToken, userController.getProjectsPage);


export default router;
