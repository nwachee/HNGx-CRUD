import { HttpException } from '../exceptions/HttpException.js';
import User from '../models/user.models.js';

export const Login = async (input) => {
  const { email, password } = input;

  const user = await User.findOne({ email});
  if (!user) throw new HttpException(404, `User with email ${email} not found`);

  const isMatch = await user.matchPassword(password)
  if (!isMatch) {
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

//Edit a user
export const updateUser = async (id, userUpdate) => {
  return await User.findByIdAndUpdate(id, userUpdate, {new : true})
}
//Delete a user
export const deleteUser = async(id) => {
  return await User.findByIdAndDelete(id)
}
//Get a single user
export const fetchById = async(filter) => {
return await User.findById(filter)
}
//Get All users
export const fetchAll = async (filter) => {
  return await User.find(filter)
}