import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
  // TODO: Implement shot creation
  res.status(201).json({ message: 'Shot created' });
});

router.get('/', (req, res) => {
  // TODO: Implement fetching shots
  res.json({ message: 'Shots retrieved' });
});

export default router;