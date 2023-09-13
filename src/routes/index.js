import { Router } from 'express';
import auth from './user.route.js';

const router = Router();

router.get('/docs', (req, res) => { res.redirect('https://documenter.getpostman.com/view/23369669/2s9YC1XEzd')});

router.get('/healthcheck', (req, res) => {
  res.status(200).json({ message: 'Server ok' });
});

router.use('/api', auth);

export default router;
