var mongoose = require("mongoose");
var CompletedQuestion = require("../data/completedQuestions");
var _ = require("underscore");

var router = require("express").Router();
router.route("/completedQuestions/:id?").get(getCompletedQuestions).post(addCompletedQuestion).delete(deleteCompletedQuestion);

function getCompletedQuestions(req, res) {
	CompletedQuestion.find(function (err, questions) {
		if (err)
			res.send(err);
		else 
			res.json(questions);
	});
}

function addCompletedQuestion(req, res) {
	var completedQuestion = new CompletedQuestion(_.extend({}), req.body);
	completedQuestion.save(function(err) {
		if(err) 
			res.send(err);
		else
			res.json(completedQuestion);
	});
}

function deleteCompletedQuestion(req, res) {
	var id = req.params.id;
	CompletedQuestion.remove({_id: id}, function (err, removed) {
		if (err)
			res.send(err);
		else
			res.json(removed);
	});
}

module.exports = router;