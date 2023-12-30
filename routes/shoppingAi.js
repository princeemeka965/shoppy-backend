const express = require('express');
const router = express.Router();

const { alexiaRun } = require('../controllers/alexia.js');

router.post('/alexia', alexiaRun);

module.exports = router