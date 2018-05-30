var express = require('express');
var router = express.Router();

router.get('/process-svm', function(req, res, next){
	response = [
		{
			"id": 1, 
			"value": "I'm a datum!"
		},
		{
			"id": 2, 
			"value": "But like me too yo."
		},
		{
			"id": 3, 
			"value": "Do I work too? Dope."
		}
	];
		//{id: 2, value: "But like, me too"}
	res.json(response);
	//res.render('index.html');
});

module.exports = router;