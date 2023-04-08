import { Router } from 'express';
import { signIn, signUp } from '../controllers/authController';
import signUpValidation from '../middlewares/signUpValidation';
import signInValidation from '../middlewares/signInValidation';

const authRoutes = Router();

authRoutes.post('/sign-up', signUpValidation, signUp);
authRoutes.post('/auth/login', signInValidation, signIn);

export default authRoutes;
