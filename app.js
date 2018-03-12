// Declaration
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

/*var login = require('./controllers/login');
var logout = require('./controllers/logout');*/
var home = require('./controllers/home');
var interface = require('./controllers/interface');
var login = require('./controllers/login');
var registration = require('./controllers/registration');


var port = 1337;

// Configure
app.set('view engine', 'ejs');

// Middlewares
app.use(bodyParser.urlencoded({extended: false}));

// Route
app.get('/', function(req, res){
	res.redirect('/home');
});

/*app.use('/login', login);
app.use('/logout', logout);*/
app.use('/home', home);
app.use('/interface', interface);
app.use('/login', login);
app.use('/registration', registration);


// Server startup
app.listen(port, function(){
	console.log('Server started at port ' + port);
});