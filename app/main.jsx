var React = require("react");
var ReactDOM = require("react-dom");
var Survey = require("./components/Survey.jsx");
var questionStore = require("./stores/questionStore");

var _questions = questionStore.getQuestions();
var _selectedAnswers = questionStore.getSelectedAnswers();

questionStore.onChange(function(questions, selectedAnswers) {
	_questions = questions;
	_selectedAnswers = selectedAnswers;
	render();
})

function render(){
	ReactDOM.render(<Survey questions={_questions} />, document.getElementById("container"));
}

render();