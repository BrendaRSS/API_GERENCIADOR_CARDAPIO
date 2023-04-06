import { Router } from 'express';
import { signIn, signUp } from '../controllers/authController';

const authRoutes = Router();

authRoutes.post('/sign-up', signUp);
authRoutes.post('/auth/login', signIn);

export default authRoutes;
