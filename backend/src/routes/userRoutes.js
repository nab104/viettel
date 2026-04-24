import { Router } from 'express';
import * as user from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';

const r = Router();

r.use(protect);
r.get('/profile', user.getProfile);

export { r as userRouter };
