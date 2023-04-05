import { Router } from "express";
import { authLogin } from "../controllers/authController";

const authRouter = Router();

authRouter.post("/auth/login", authLogin);