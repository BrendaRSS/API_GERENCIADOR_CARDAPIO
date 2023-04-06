import { BodyUser } from '../protocols';
import User from '../models/authModel';

async function signUp(body: BodyUser) {
  return await User.create(body);
}

async function findUserByEmail(email){
    return await User.findOne({
        email: email
    })
}

const authRepository = {
  signUp,
  findUserByEmail,
};

export default authRepository;
