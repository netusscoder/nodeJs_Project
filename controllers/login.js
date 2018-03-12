// Declaration
var express = require('express');
var router = express.Router();
/*var asyncValidator = require('async-validator');
var userRules = require.main.require('./validation-rules/user');

var loginModel = require.main.require('./models/login-model');*/

// Request Handler
router.get('/index', function(req, res){
	res.render('login/index');
});

// Export (mandatory)
module.exports = router;