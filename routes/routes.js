var express = require('express');
var router = express.Router();

var userRegistrationLogin = require('./userRegistration')
router.get('/new', userRegistrationLogin.registration)

var secondApi = require('./scrapeImage')
router.get('/newApi', secondApi.history,secondApi.history2);
module.exports = router;