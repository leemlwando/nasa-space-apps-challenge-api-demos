const express  = require('express');
const router = express.Router();

const home = require('./home');
const epic = require('./epic');

/**
 * GET homepage
*/
router.get('/', home.get);

/**
 * GET EPIC data
*/
router.get('/epic', epic.get);

module.exports = router;