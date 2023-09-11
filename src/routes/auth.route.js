import { Router } from 'express';
import { login, register,findAllUser,findUser,updateUser,deleteUser } from '../controllers/auth.controller.js';
import {isAuth} from '../middlewares/auth.middleware.js';
import validate from '../middlewares/validate.middleware.js';
import { loginSchema, registerSchema, userUpdate } from '../schema/user.schema.js';

const router = Router();

router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);
router.get('/:id', findUser)
router.patch('/:id', validate(userUpdate), isAuth, updateUser)
router.get('/', findAllUser)
router.delete('/:id', isAuth, deleteUser)


export default router;
