var dispatcher = require("../dispatcher");
var questionService = require("../services/questionService");
var completedQuestionStore = require("./completedQuestionStore");

function QuestionStore() {
	var listeners = [];

	function onChange(listener) {
		getQuestions(listener);
		listeners.push(listener);
	}

	function getQuestions(cb) {
		questionService.getQuestions().then(function(res) {
			console.log("Questions: "+res);
			cb(res);
		});
	}

	function addSelectedAnswer(question) {
		questionService.addSelectedAnswer(question).then(function (res) {
			console.log(res);
			triggerListeners();
		});
	}

	function deleteQuestion(question) {
		questionService.deleteQuestion(question).then(function (res) {
			//console.log(res);
			triggerListeners();
		})
	}

	function triggerListeners() {
		getQuestions(function (res) {
				listeners.forEach(function(listener) {
				listener(res);
			});
		});
	}

	function initializeQuestions() {
		questionService.initializeQuestions().then(function (res) {
			console.log(res);
			triggerListeners();
		})
	}

	dispatcher.register(function(payload) {
		var split = payload.type.split(":");
		if(split[0] === "question") {
			switch(split[1]) {
				case "addSelectedAnswer":
					addSelectedAnswer(payload.question);
					break;
				case "completeQuestion":
					deleteQuestion(payload.question);
					break;
			}
		}
	});

	return {
		onChange: onChange,
		initializeQuestions: initializeQuestions
	}
}

module.exports = QuestionStore();