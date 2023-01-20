const express = require('express');

const service = require('../Service/ContactMeService')

const router = express.Router();

//Prepend all routes with contact-me

//Verifies that the email server is up
router.get('/verify', service.verify);

//Sends email - requires email in request body
router.post('/', service.sendEmail);

module.exports = router;