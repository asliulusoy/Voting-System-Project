import express from 'express';
import * as pageController from '../controllers/pageController.js';
import * as auth from '../middleware/auth.js';

const router = express.Router();

router.route("/").get(pageController.getHomePage);
router.route("/dashboard").get(auth.authenticateToken, pageController.getDashboardPage);
router.route("/voting").get(auth.authenticateToken, pageController.getVotingPage);
router.route("/profile").get(auth.authenticateToken, pageController.getProfilePage);

export default router;