var express = require('express');
var router = express.Router();

router.get('/process-svm', function(req, res, next){
	response = [
		{id: 1, value: "I'm data!"},
		{id: 2, value: "But like, me too"}
	];
	res.json(response);
	//res.render('index.html');
});

module.exports = router;