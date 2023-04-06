import unauthorizedError from '../errors/unauthorizedError';
import notFoundError from '../errors/notFoundError';
import authRepository from '../repository/authRepository';
import conflictError from '../errors/conflictError';
import badRequestError from '../errors/badRequestError';
import { BodyUser } from '../protocols';

async function signUp(body: BodyUser) {
  const emailExist = await authRepository.findUserByEmail(body.email);
  if (emailExist){
    console.log(emailExist);
      throw conflictError();
  }

  const postSignUp = await authRepository.signUp(body);
  if (!postSignUp) {
    throw badRequestError();
  }

  delete postSignUp.password;

  return postSignUp;
}

async function signIn(body) {
  // const userExist = await
  // if (!userExist){
  //     throw unauthorizedError();
  // }
  // const passwordValidate =
  // if (!passwordValidate){
  //     throw unauthorizedError();
  // }
  // const token = await createSession
}

const authService = {
  signUp,
  signIn,
};

export default authService;
