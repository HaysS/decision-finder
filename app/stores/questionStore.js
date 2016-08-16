var dispatcher = require("../dispatcher");

function QuestionStore() {
	var listeners = [];
	var questions = [{questionNum: 1, question: "How are you feeling?", answers: ["Great", "Good", "Neutral", "Bad"], selectedAnswer: ""},
					{questionNum: 2, question: "How much have you exercised today?", answers: ["A lot", "Enough", "Not much", "None"], selectedAnswer: ""}];
	var completedQuestions = [];

	function getQuestions() {
		return questions;
	}

	function getCompletedQuestions() {
		return completedQuestions;
	}

	function onChange(listener) {
		listeners.push(listener);
	}

	function addSelectedAnswer(_question) {
		questions.forEach(function(question, i) {
			if(question.questionNum ===_question.questionNum) {
				question.selectedAnswer = _question.selectedAnswer;
			}
		})
		triggerListeners();
	}

	function removeQuestion(question) {
		var _index;
		questions.map(function (q, index) {
			if(q.questionNum === question.questionNum) {
				_index = index;
			}
		});
		questions.splice(_index, 1);
		triggerListeners();
	}

	function triggerListeners() {
		listeners.forEach(function(listener) {
			listener(questions);
		});
	}

	dispatcher.register(function(payload) {
		var split = payload.type.split(":");
		if(split[0] === "question") {
			switch(split[1]) {
				case "addSelectedAnswer":
					addSelectedAnswer(payload.question);
					break;
				case "removeQuestion":
					removeQuestion(payload.question);
					break;
			}
		}
	});

	return {
		getQuestions: getQuestions,
		getCompletedQuestions: getCompletedQuestions,
		onChange: onChange
	}
}

module.exports = QuestionStore();