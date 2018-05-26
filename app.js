var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();

app.listen(3000, function(){
	console.log('Server started on port 3000...');
})