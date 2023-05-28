import { Router } from 'express';
import auth from './auth.route.js';

const router = Router();

router.get('/healthcheck', (req, res) => {
  res.status(200).json({ message: 'Server ok' });
});

router.use('/auth', auth);

export default router;
