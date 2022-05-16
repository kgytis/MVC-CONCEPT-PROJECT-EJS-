import express from 'express';

const router = express.Router();

import getEverything from '../controllers/bars.js'

router.get('/', getEverything);

export default router;