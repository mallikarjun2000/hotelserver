import express from 'express';
import analytics from '../controller/analytics.js';

const router = express.Router();

router.get('/', analytics);

export default router;