import express from 'express';
import * as pageController from '../controllers/pageController.js';
import * as auth from '../middleware/auth.js';

const router = express.Router();

router.route("/").get(pageController.getIndexPage);
router.route("/login").get(pageController.getIndexPage);
router.route("/signup").get(pageController.getIndexPage);
router.route("/HowtoVote").get(pageController.getBLVotingtPage);
router.route("/contact").get(pageController.getContactPage);

router.route("/dashboard").get(auth.authenticateToken, pageController.getDashboardPage);
router.route("/voting").get(auth.authenticateToken,pageController.getALVotingPage);
router.route("/profile").get(auth.authenticateToken, pageController.getProfilePage);
router.route("/projects").get(auth.authenticateToken, pageController.getProjectsPage);

export default router;
