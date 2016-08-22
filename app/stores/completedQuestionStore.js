var dispatcher = require("../dispatcher");
var questionService = require("../services/questionService");
var completedQuestionService = require("../services/completedQuestionService");

function QuestionStore() {
	var listeners = [];

	function onChange(listener) {
		getCompletedQuestions(listener);
		listeners.push(listener);
	}

	function getCompletedQuestions(cb) {
		completedQuestionService.getCompletedQuestions().then(function(res) {
			console.log("CompletedQuestions: " + res);
			cb(res);
		});
	}

	function addCompletedQuestion(question) {
		completedQuestionService.addCompletedQuestion(question).then(function (res) {
			console.log(res);
			triggerListeners();
		});
	}

	function triggerListeners() {
		getCompletedQuestions(function (res) {
				listeners.forEach(function(listener) {
				listener(res);
			});
		});
	}

	function initializeCompletedQuestions() {
		completedQuestionService.initializeCompletedQuestions().then(function (res) {
			console.log(res);
			triggerListeners();
		});
	}

	dispatcher.register(function(payload) {
		var split = payload.type.split(":");
		if(split[0] === "question") {
			switch(split[1]) {
				case "completeQuestion":
					addCompletedQuestion(payload.question);
					break;
			}
		}
	});

	return {
		onChange: onChange,
		initializeCompletedQuestions: initializeCompletedQuestions
	}
}

module.exports = QuestionStore();