import express from 'express';
import * as userController from '../controllers/userController.js';
import * as pageController from '../controllers/pageController.js'
import * as auth from '../middleware/auth.js';

const router = express.Router();

router.route('/signup').post(userController.createUser);
router.route('/login').post(userController.loginUser);
router.route('/dashboard').get(auth.authenticateToken, userController.getDashboardPage);
router.route("/profile").get(auth.authenticateToken, userController.getProfilePage);
router.route("/projects").get(auth.authenticateToken, userController.getProjectsPage);
router.route("/vote").post(auth.authenticateToken, userController.submitVote);
router.route("/results").get(auth.authenticateToken, userController.getResultsPage);


export default router;
