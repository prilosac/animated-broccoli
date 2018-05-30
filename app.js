var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var dataProcess = require('./routes/dataProcess');
var index = require('./routes/index');
var tasks = require('./routes/tasks');

var srvPort = 3000;

var app = express();

//View Engine (let server know where views will be)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder (place for all the Angular stuff to live)
app.use(express.static(path.join(__dirname, 'client/data-vis/dist')));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', dataProcess);
app.use(function(res, req, next){
	res.setHeader('Access-Control-Allow-Origin', 'http://138.68.20.168:4200');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
	next();
})


app.listen(srvPort, function(){
	console.log('Server started on port ' + srvPort + '...');
})