var dispatcher = require("../dispatcher");
var questionService = require("../services/questionService");

function QuestionStore() {
	var listeners = [];
	var completedQuestions = [];

	function onChange(listener) {
		getQuestions(listener);
		listeners.push(listener);
	}

	function getQuestions(cb) {
		questionService.getQuestions().then(function(res) {
			console.log(res);
			cb(res);
		});
	}

	function getCompletedQuestions() {
		return completedQuestions;
	}

	function addSelectedAnswer(question) {
		questionService.addSelectedAnswer(question).then(function (res) {
			console.log(res);
			triggerListeners();
		});
	}

	function completeQuestion(question) {
		questionService.completeQuestion(question).then(function (res) {
			console.log(res);
			triggerListeners();
		});
	}

	function triggerListeners() {
		getQuestions(function (res) {
				listeners.forEach(function(listener) {
				listener(res);
			});
		});
	}

	dispatcher.register(function(payload) {
		var split = payload.type.split(":");
		if(split[0] === "question") {
			switch(split[1]) {
				case "addSelectedAnswer":
					addSelectedAnswer(payload.question);
					break;
				case "completeQuestion":
					completeQuestion(payload.question);
					break;
			}
		}
	});

	return {
		getCompletedQuestions: getCompletedQuestions,
		onChange: onChange
	}
}

module.exports = QuestionStore();