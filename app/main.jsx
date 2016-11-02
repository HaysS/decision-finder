var React = require("react");
var ReactDOM = require("react-dom");
var Survey = require("./components/Survey.jsx");
var questionStore = require("./stores/questionStore");
var completedQuestionStore = require("./stores/completedQuestionStore");
var questionListStore = require("./stores/questionListStore");

var _questions = [];
var _completedQuestions = [];

var getQuestionsCallback = function (questions) {
	_questions = questions;
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
	ReactDOM.render(<Survey info={{questionLists: {listNum: 1, questions: _questions}}} />, document.getElementById("container"));	
}