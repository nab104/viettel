import { Router } from 'express';
import * as auth from '../controllers/authController.js';
import { validate } from '../middleware/validate.js';
import { registerRules, loginRules } from '../validators/auth.js';

const r = Router();

r.post('/register', registerRules, validate, auth.register);
r.post('/login', loginRules, validate, auth.login);

export { r as authRouter };
