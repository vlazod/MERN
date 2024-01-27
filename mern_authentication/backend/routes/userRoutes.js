import express from 'express';
const router = express.Router();
import { 
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile 
} from '../controllers/userController.js';

import { protect } from '../middleware/authMiddleware.js'

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile')
      .get(protect, getUserProfile)
      .put(protect, updateUserProfile); //This is because we have two actions(GET & PUT) to the same route, so we call a fuction depending on the http action

export default router; 