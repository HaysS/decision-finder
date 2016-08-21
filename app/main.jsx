var React = require("react");
var ReactDOM = require("react-dom");
var Survey = require("./components/Survey.jsx");
var questionStore = require("./stores/questionStore");
// var questionListStore = require("./stores/questionListStore");

var _questions = [];

var getQuestionsCallback = function (questions) {
	_questions = questions;

	render();
}
questionStore.onChange(getQuestionsCallback);

var _completedQuestions = questionStore.getCompletedQuestions();

// questionListStore.updateQuestionsInList();	//Updates questions in the list to match questions in questionStore

// var _questionLists = questionListStore.getQuestionLists();
// var _completedQuestionLists = questionListStore.getCompletedQuestionLists();


// questionListStore.onChange(function(questionLists, completedQuestionLists) {
// 	_questionLists = questionLists;
// 	_completedQuestionLists = completedQuestionLists;
// 	render();
// })

function render(){
	ReactDOM.render(<Survey info={{questionLists: {listNum: 1, questions: _questions}}} />, document.getElementById("container"));	
}