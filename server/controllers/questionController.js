var mongoose = require("mongoose");
var Question = require("../data/questions");
var _ = require("underscore");

var router = require("express").Router();
router.route("/questions/:id?").get(getQuestions).post(addSelectedAnswer).delete(completeQuestion);

function getQuestions(req, res) {
	Question.find(function (err, questions) {
		if (err)
			res.send(err);
		else 
			res.json(questions);
	});
}

function addSelectedAnswer(req, res) {
	var question = new Question(_.extend({}, req.body));
	Question.save(function(err) {
		if (err)
			res.send(err);
		else
			res.json(question);
	});
}

function completeQuestion(req, res) {
	var id = req.params.id;
	Question.remove({_id: id}, function (err, removed) {
		if (err)
			res.send(err);
		else
			res.json(removed);
	});
}

module.exports = router;