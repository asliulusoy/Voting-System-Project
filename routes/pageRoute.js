import express from 'express';
import * as pageController from '../controllers/pageController.js';


const router = express.Router();

router.route("/").get(pageController.getIndexPage);
router.route("/login").get(pageController.getIndexPage);
router.route("/signup").get(pageController.getIndexPage);
router.route("/HowtoVote").get(pageController.getBLVotingtPage);
router.route("/contact").get(pageController.getContactPage);
router.route("/logout").get(pageController.getLogoutPage);

export default router;
