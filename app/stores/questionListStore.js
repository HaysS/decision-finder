var dispatcher = require("../dispatcher");
var questionStore = require("./questionStore");

function QuestionListStore() {
	var listeners = [];
	var questions = [];
	var completedQuestions = [];

	function onChange(listener) {
		listeners.push(listener);
	}

	function getQuestionLists() {
		return questionLists;
	}

	function updateQuestionsInList(_questions) {
		questions = [];

		_questions.forEach(function(_q) {
			questions.push({
				_id: _q._id,
				__v: _q.__v,
				listNum: _q.listNum,
				questionNum: _q.questionNum,
				question: _q.question,
				answers: _q.answers,
				selectedAnswer: ""
			});
		});	
	}

	function completeQuestion(question) {
		//Finds index of passed question in the questions array using the _id value
		completedQuestions.push(questions[questions.map(function (_q) { return _q._id }).indexOf(question._id)]);
		//Did not use questions.splice() due to updateQuestionsInList reinitializing the questions array on each update
	}

	function completeQuestionList(questionList) {
		
	}

	dispatcher.register(function(payload) {
		var split = payload.type.split(":");
		if(split[0] === "question") {
			switch(split[1]) {
				case "completeQuestion":
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
		updateQuestionsInList: updateQuestionsInList,
		onChange: onChange
	}
}

module.exports = QuestionListStore();