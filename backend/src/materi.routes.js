import { Router } from 'express';
import { semua } from './materi.repository.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const daftarMateri = await semua();
    res.json(daftarMateri);
  } catch (error) {
    next(error);
  }
});

export default router;
