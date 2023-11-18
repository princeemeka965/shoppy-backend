const express = require('express');
const router = express.Router();

const {
    getTracks
} = require('../controllers/artisteTracks.js');

router.get('/tracks/:id', getTracks);

module.exports = router