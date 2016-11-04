var mongoose = require("mongoose");
var completedQuestionSchema = mongoose.Schema({
	questionNum: Number,
	question: String,
	answers: [],
	selectedAnswer: String,
	resultValue: Number
});

module.exports = mongoose.model("completedQuestions", completedQuestionSchema);