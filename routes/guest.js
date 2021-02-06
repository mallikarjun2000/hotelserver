import express from 'express';
import {seeServices, buyService, seeUsingServices, usingServiceStatus, checkout, updateStatus} from '../controller/guest.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello from guest');
});

router.get('/seeServices', seeServices);
router.post('/buyService', buyService);
router.get('/seeUsingServices', seeUsingServices);
router.get('/usingServiceStatus', usingServiceStatus);
router.get('/checkout', checkout);
router.post('/updateStatus', updateStatus);

export default router;