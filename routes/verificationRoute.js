const express = require('express');
const { codeVerification } = require('../controller/otpVerification'); 
const router = express.Router();

router.post('/verify', codeVerification);

module.exports = router;
