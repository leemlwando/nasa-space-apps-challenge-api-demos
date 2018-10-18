const express = require('express');
const home = require('./home');
const apod = require('./apod');

//create a router to which all api end points will be attatched
const router = express.Router();

/**
 * GET INDEX/HOME
*/
router.get('/',home.get);


/**
 * GET Apod API
*/
router.get('/apod',apod.get);

module.exports = router;