import express from 'express';
import * as userController from '../controllers/userController.js';
import * as authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.route('/signup').post(userController.createUser);
router.route('/login').post(userController.loginUser);
router
  .route('/dashboard')
  .get(authMiddleware.authenticateToken, userController.getDashboardPage);
export default router;
