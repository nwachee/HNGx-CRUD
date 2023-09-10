import { Router } from 'express';
import auth from './auth.route.js';
import doc from './doc.route.js';

const router = Router();

router.get('/healthcheck', (req, res) => {
  res.status(200).json({ message: 'Server ok' });
});

router.use('/auth', auth);
router.use('/docs', doc);

export default router;
