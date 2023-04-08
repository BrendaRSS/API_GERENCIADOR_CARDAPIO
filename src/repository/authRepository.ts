import { BodyUser } from '../protocols';
import User from '../models/authModel';
import { ObjectId } from 'mongoose';

async function signUp(body: BodyUser) {
  return await User.create(body);
}

async function findUserByEmail(email: string){
    return await User.findOne({
        email: email
    })
}

async function createSession(token: string, userId: ObjectId){
  
}

const authRepository = {
  signUp,
  findUserByEmail,
  createSession,
};

export default authRepository;
