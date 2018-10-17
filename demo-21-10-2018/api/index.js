const express = require('express');
const home = require('./home');

//create a router to which all api end points will be attatched
const router = express.Router();

/**
 * GET INDEX/HOME
*/
router.get('/',home.get);

module.exports = router;