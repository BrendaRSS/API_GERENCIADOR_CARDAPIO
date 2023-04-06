import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    avatar: {
      type: String,
      require: true,
    },
    adm: {
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;