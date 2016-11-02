var dispatcher = require("../dispatcher");
var questionStore = require("./questionStore");

function QuestionListStore() {
	var listeners = [];
	var questionLists = [{questions: [], completedQuestions: []}];
	var completedQuestionLists = [];

	function onChange(listener) {
		listeners.push(listener);
	}

	function getQuestionLists() {
		return questionLists;
	}

	function getCompletedQuestionLists() {
		return completedQuestionLists;
	}

	function updateQuestionsInList() {
		questionLists[0].questions = [];
		questions = questionStore.getQuestions()
		for(var i = 0; i < questions.length; i++) {
			questionLists[0].questions.push(questions[i]);
		}
	}

	function completeQuestion(question) {
		console.log("dalkfjdlskf");
		var index = questionList[0].indexOf(question);
	}

	function completeQuestionList(questionList) {
		
	}

	dispatcher.register(function(payload) {
		var split = payload.type.split(":");
		if(split[0] === "question") {
			switch(split[1]) {
				case "completeQuestion":
					console.log("idafdaljkfjalksdjf");
					completeQuestion(payload.question);
					break;
			}
		}
		if(split[0] === "questionList") {
			switch(split[1]) {
				case "completeQuestionList":
					completeQuestionList(payload.questionList);
					break;
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