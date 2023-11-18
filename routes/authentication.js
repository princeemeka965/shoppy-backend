const express = require('express');
const router = express.Router();

const {
    createAccount, login
} = require('../controllers/authentication.js');

router.post('/createAccount', createAccount);

router.post('/login', login);


module.exports = router