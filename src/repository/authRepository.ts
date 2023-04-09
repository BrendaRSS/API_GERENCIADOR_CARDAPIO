import { BodyUser } from '../protocols';
import User from '../models/authModel';
import { ObjectId } from 'mongoose';

async function signUp(body: BodyUser) {
  return await User.create(body);
}

async function findUserByEmail(email: string) {
  return await User.findOne({
    email: email,
  });
}

async function findUserById(id: ObjectId) {
  return await User.findById(id);
}

const authRepository = {
  signUp,
  findUserByEmail,
  findUserById,
};

export default authRepository;
