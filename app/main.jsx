var React = require("react");
var ReactDOM = require("react-dom");
var QuestionList = require("./components/QuestionList.jsx");

var _questions= [{question: "How are you feeling?", answers: ["Great", "Good", "Neutral", "Bad"]},
				 {question: "How much have you exercised today?", answers: ["A lot", "Enough", "Not much", "None"]}];

function render(){
	ReactDOM.render(<QuestionList questions={_questions} />, document.getElementById("container"));
}
render();