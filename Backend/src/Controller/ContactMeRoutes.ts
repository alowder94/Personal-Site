import express from 'express'
import {verify, sendEmail} from '../Service/ContactMeService.js'


const router = express.Router();

//Prepend all routes with contact-me

//Verifies that the email server is up
router.get('/verify', verify);

//Sends email - requires email in request body
router.post('/', sendEmail);

export const contactMeRoutes = router
