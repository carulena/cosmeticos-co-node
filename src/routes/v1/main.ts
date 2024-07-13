import { Router } from 'express';

import produtos from './produtos.route';

const router = Router();

router.use('/produtos', produtos);

export default router;