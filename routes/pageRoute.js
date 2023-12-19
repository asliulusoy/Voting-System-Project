import express from 'express';
import * as pageController from '../controllers/pageController.js';


const router = express.Router();

router.route("/").get(pageController.getIndexPage);
router.route("/login").get(pageController.getIndexPage);
router.route("/signup").get(pageController.getIndexPage);
router.route("/HowtoVote").get(pageController.getBLVotingtPage);
router.route("/contact").get(pageController.getContactPage);
router.route("/contact").post(pageController.sendMail);
<<<<<<< HEAD
=======
router.route("/about").get(pageController.getAboutPage);
>>>>>>> asli
router.route("/logout").get(pageController.getLogoutPage);
router.route("/about").get(pageController.getAboutPage);
export default router;
