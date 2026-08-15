const express = require('express');
const { submitLead } = require('../controllers/leadController');
const router = express.Router();

router.post('/', submitLead);

module.exports = router;
