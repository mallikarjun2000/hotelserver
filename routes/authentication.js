import express from 'express';
import {home, login, register} from '../controller/authentication.js';
const router = express.Router();

router.get('/', home);

router.post('/login', login);

router.post('/register',register);

export default router;