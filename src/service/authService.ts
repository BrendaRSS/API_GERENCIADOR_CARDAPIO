import unauthorizedError from '../errors/unauthorizedError';
import authRepository from '../repository/authRepository';
import conflictError from '../errors/conflictError';
import badRequestError from '../errors/badRequestError';
import { BodyUser, Login } from '../protocols';
import bcrypt from "bcrypt";
import { ObjectId } from 'mongoose';
import dotenv from "dotenv";
dotenv.config();
import jwt from 'jsonwebtoken';

async function signUp(body: BodyUser) {
  const emailExist = await authRepository.findUserByEmail(body.email);
  if (emailExist){
    throw conflictError();
  }

  const postSignUp = await authRepository.signUp(body);
  if (!postSignUp) {
    throw badRequestError();
  }

  delete postSignUp.password;

  return postSignUp;
}

async function signIn(body: Login) {
  const userExist = await authRepository.findUserByEmail(body.email);
  if (!userExist){
      throw unauthorizedError();
  }
  const passwordValidate = bcrypt.compareSync(body.password, userExist.password)
  if (!passwordValidate){
      throw unauthorizedError();
  }

  const token = await createSession(userExist.id);

 delete userExist.password

  return {
    user: userExist,
    token
  };
}

async function createSession(id: ObjectId){
  const token = jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 86400 });

  return token;
}

const authService = {
  signUp,
  signIn,
};

export default authService;
