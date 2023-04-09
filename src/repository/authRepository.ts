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

async function findSession(token: string){

}

async function findUserById(id){
  return await User.findById(id);
}

const authRepository = {
  signUp,
  findUserByEmail,
  createSession,
  findSession,
  findUserById,
};

export default authRepository;
