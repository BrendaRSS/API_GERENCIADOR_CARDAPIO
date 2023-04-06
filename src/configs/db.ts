import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export default async function connectDatabase(): Promise<void> {
  try {
    mongoose.set('strictQuery', true);

    await mongoose.connect(`${process.env.DATABASE_URL}`);
    console.log('connected database');
  } catch (error) {
    console.log(error);
  }
}
