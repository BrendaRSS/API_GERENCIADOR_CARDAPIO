import { Router } from 'express';
import { signIn, signUp } from '../controllers/authController';
import signUpValidation from '../middlewares/signUpValidation';

const authRoutes = Router();

authRoutes.post('/sign-up', signUpValidation, signUp);
authRoutes.post('/auth/login', signIn);

export default authRoutes;
