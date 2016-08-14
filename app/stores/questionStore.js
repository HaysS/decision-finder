var dispatcher = require("../dispatcher");

function QuestionStore() {
	var listeners = [];
	var questions= [{questionNum: 1, question: "How are you feeling?", answers: ["Great", "Good", "Neutral", "Bad"]},
					 {questionNum: 2, question: "How much have you exercised today?", answers: ["A lot", "Enough", "Not much", "None"]}];
	var selectedAnswers = [];

	function getQuestions() {
		return questions;
	}

	function getSelectedAnswers() {
		return selectedAnswers;
	}

	function onChange(listener) {
		listeners.push(listener);
	}

	function addSelectedAnswer(selectedAnswer) {
		selectedAnswers.push(selectedAnswer);
		triggerListeners();
		console.log(selectedAnswer);
	}

	function triggerListeners() {
		listeners.forEach(function(listener) {
			listener(questions, selectedAnswers);
		});
	}

	dispatcher.register(function(payload) {
		var split = payload.type.split(":");
		if(split[0] === "question") {
			switch(split[1]) {
				case "addSelectedAnswer":
					addSelectedAnswer(payload.question.selectedAnswer);
					break;
			}
		}
	});

	return {
		getQuestions: getQuestions,
		getSelectedAnswers: getSelectedAnswers,
		onChange: onChange
	}
}

module.exports = QuestionStore();