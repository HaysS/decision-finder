var mongoose = require("mongoose");
var fs = require("fs");
var path = require("path");
var Question = require("../data/questions");

var router = require("express").Router();
router.route("/questions/:id?").get(getQuestions).post(addSelectedAnswer).delete(completeQuestion).put(initializeQuestions);

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
					res.save(err);

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

function initializeQuestions() {
	Question.remove({}, function(err) {
		if(err)
			res.json(err);
	});
	
	var initialQuestions = JSON.parse(fs.readFileSync(path.join(__dirname, "../") + "./data/Questions.json", "utf8"));

	initialQuestions.forEach(function(question) {
		var _question = new Question(question);
		_question.save(function(err, doc) {});
	});
}

module.exports = router;