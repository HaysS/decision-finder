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

	function completeQuestion(_question) {
		var _i;
		questions.map(function (question, i) {
			if(question.questionNum === _question.questionNum) {
				_i = i;
				completedQuestions.push(question);
			}
		});
		questions.splice(_i, 1);
		triggerListeners();
		console.log(completedQuestions[completedQuestions.length-1]);
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
				case "completeQuestion":
					completeQuestion(payload.question);
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