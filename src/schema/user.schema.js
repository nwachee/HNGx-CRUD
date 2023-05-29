import Joi from 'joi';

export const registerSchema = Joi.object().keys({
  fullname: Joi.string().max(54).required(),
  password: Joi.string().min(8).max(30).required(),
  email: Joi.string().email().required(),
});

export const loginSchema = Joi.object()
  .keys({
    email: Joi.string().email(),
    password: Joi.string().min(8).max(30).required(),
  })

