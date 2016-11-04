var React = require("react");
var ReactDOM = require("react-dom");
var Survey = require("./components/Survey.jsx");
var Results = require("./components/Results.jsx");
var questionStore = require("./stores/questionStore");
var completedQuestionStore = require("./stores/completedQuestionStore");
var questionListStore = require("./stores/questionListStore");

var _questions = [];
var _completedQuestions = [];

var getQuestionsCallback = function (questions) {
	_questions = questions;
	questionListStore.updateQuestionsInList(_questions);
	render();
}
var getCompletedQuestionsCallback = function(completedQuestions) {
	_completedQuestions = completedQuestions;
	//Nothing to render since completed questions are hidden
}

questionStore.initializeQuestions();
completedQuestionStore.initializeCompletedQuestions();

questionStore.onChange(getQuestionsCallback);
completedQuestionStore.onChange(getCompletedQuestionsCallback);

function render(){
	if(_questions.length > 0)
		ReactDOM.render(<Survey info={{questionLists: {listNum: 1, questions: _questions}}} />, document.getElementById("container"));	
	else if(_questions.length == 0)
		ReactDOM.render(<Results info={{comletedQuestions: _completedQuestions}} />, document.getElementById("container"));
}