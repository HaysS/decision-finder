var React = require("react");
var ReactDOM = require("react-dom");
var Survey = require("./components/Survey.jsx");
var questionStore = require("./stores/questionStore");
var questionListStore = require("./stores/questionListStore");

var _questions = questionStore.getQuestions();
var _selectedAnswers = questionStore.getSelectedAnswers();

questionListStore.updateQuestionsInList();	//Updates questions in the list to match questions in questionStore

var _questionLists = questionListStore.getQuestionLists();
var _completedQuestionLists = questionListStore.getCompletedQuestionLists();

questionStore.onChange(function(questions, selectedAnswers) {
	_questions = questions;
	_selectedAnswers = selectedAnswers;

	questionListStore.updateQuestionsInList();

	render();
})

questionListStore.onChange(function(questionLists, completedQuestionLists) {
	_questionLists = questionLists;
	_completedQuestionLists = completedQuestionLists;
	render();
})

function render(){
	ReactDOM.render(<Survey questionLists={_questionLists} />, document.getElementById("container"));
}

render();