import Joi from 'joi';

export const registerSchema = Joi.object().keys({
  fullname: Joi.string().max(54).required(),
  gender: Joi.string().required(),
  password: Joi.string().min(8).max(30).required(),
  email: Joi.string().email().required(),
});

export const loginSchema = Joi.object().keys({
    email: Joi.string().email(),
    password: Joi.string().min(8).max(30).required(),
  })

  export const userUpdate = Joi.object({
    fullname: Joi.string(),
    email: Joi.string(),
    gender: Joi.string(),
    password: Joi.string(),
  })
  
