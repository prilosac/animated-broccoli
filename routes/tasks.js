var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://prilo:lucas5658@ds237700.mlab.com:37700/jobprep_prilo', ['tasks']);

//Get All Tasks
router.get('/tasks', function(req, res, next){
	db.tasks.find(function(err, tasks){
		if(err){
			res.send(err);
		}
		res.json(tasks);
	});
});

//Get Single Task
router.get('/tasks/:id', function(req, res, next){
	db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}function(err, task){
		if(err){
			res.send(err);
		}
		res.json(task);
	});
});

module.exports = router;