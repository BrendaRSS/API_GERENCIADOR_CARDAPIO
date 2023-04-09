import joi, { string } from 'joi';

export const signUpSchema = joi.object({
  name: joi.string().min(3).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  avatar: joi.string().required(),
  adm: joi.boolean(),
});

export const signInSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

export const productSchema = joi.object({
  categories: joi.array().items().required(),
  name: joi.string().min(2).required(),
  qty: joi.number().required(),
  price: joi.number().required(),
});