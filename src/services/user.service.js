import { HttpException } from '../exceptions/HttpException.js';
import User from '../models/user.models.js';

export const Login = async (input) => {
  const { email, password } = input;

  const user = await User.findOne({ email});
  if (!user) throw new HttpException(404, `User with email ${email} not found`);

  if (!user.matchPassword(password)) {
    throw new HttpException(409, 'Invalid Password');
  }
  return user;
};

export const CreateUser = async (input) => {
  const { email } = input;

  const userExists = await User.findOne({ email });

  if (userExists) {
    throw new HttpException(400, `User with email ${email} already exists`);
  }

  return await User.create(input);
};