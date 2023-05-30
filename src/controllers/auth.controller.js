import * as services from '../services/user.service.js';
import { generateToken } from '../util/jwt.util.js';

export const register = async (req, res, next) => {
  try {
    
        const newUser = await services.CreateUser(req.body);


    res.status(201).json({ message: 'User Registered Sucessfully', success: true, data: newUser });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { _id } = await services.Login(req.body);

    const token = generateToken({ _id }, { expiresIn: '5d' });

    res.json({ success: true, message: "Login Successful", data: token });
  } catch (error) {
    next(error);
  }
};
