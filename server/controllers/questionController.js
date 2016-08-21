var mongoose = require("mongoose");
var Question = require("../data/questions");

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
	Question.findOne({question: req.body.question}, function(err, question) {
		if (err)
			res.send(err);

		if (! question) 
			res.json("no question found");
		else {
			question.selectedAnswer = req.body.selectedAnswer;
			question.save(function(err) {
				if (err)
					res.json(err);

				res.json("success saving question");
			})
		}
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