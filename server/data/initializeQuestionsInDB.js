var fs = require("fs");
var path = require("path");
var Question = require("./questions");
var CompletedQuestions = require("./completedQuestions");


var initializeQuestionsInDB = function () {
		Question.collection.remove({});
		CompletedQuestions.collection.remove({});

		fs.readFile(path.join(__dirname, "../") + "./data/Questions.json", "utf8", function(err, data) {
		if(err) {
			console.log(err);
			return;
		}

		
		var dataFromFile = JSON.parse(data);

		dataFromFile.forEach(function(obj) {
			var question = new Question(obj);
			question.save(function(err, doc) {
			});
		});
	});
}

module.exports = initializeQuestionsInDB;