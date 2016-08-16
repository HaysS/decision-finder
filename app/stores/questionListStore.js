var dispatcher = require("../dispatcher");
var questionStore = require("./questionStore");

function QuestionListStore() {
	var listeners = [];
	var questionLists = [{listNum: 1, questions: []}];
	var completedQuestionLists = [];

	function updateQuestionsInList() {
		questionLists[0].questions = [];
		questions = questionStore.getQuestions()
		for(var i = 0; i < questions.length; i++) {
			questionLists[0].questions.push(questions[i]);
		}
	}

	function getQuestionLists() {
		return questionLists;
	}

	function getCompletedQuestionLists() {
		return completedQuestionLists;
	}

	function onChange(listener) {
		listeners.push(listener);
	}

	dispatcher.register(function(payload) {
		var split = payload.type.split(":");
		if(split[0] === "questionList") {
			switch(split[1]) {
			}
		}
	});

	return {
		getQuestionLists: getQuestionLists,
		getCompletedQuestionLists: getCompletedQuestionLists,
		updateQuestionsInList: updateQuestionsInList,
		onChange: onChange
	}
}

module.exports = QuestionListStore();