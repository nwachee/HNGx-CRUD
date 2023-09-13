import { Router } from 'express';
import { register,findAllUser,findUser,updateUser,deleteUser } from '../controllers/user.controller.js';
import validate from '../middlewares/validate.middleware.js';
import { registerSchema, userUpdate } from '../schema/user.schema.js';

const router = Router();

router.post('/', validate(registerSchema), register);
router.get('/:idOrName', findUser)
router.patch('/:id', validate(userUpdate), updateUser)
router.get('/', findAllUser)
router.delete('/:id', deleteUser)

export default router;
