import express from 'express';
import {addService, availableServices, getGuestDetails, seeAllGuests} from '../controller/staff.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('staff');
});

router.post('/addService', addService);

router.get('/availableServices', availableServices);

router.get('/getGuestDetails', getGuestDetails);

router.get('/seeAllGuests', seeAllGuests);

export default router;