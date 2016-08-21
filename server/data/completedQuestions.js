var mongoose = require("mongoose");
var completedQuestionSchema = mongoose.Schema({
	questionNum: Number,
	question: String,
	answers: [],
	selectedAnswer: String
});

module.exports = mongoose.model("completedQuestions", completedQuestionSchema);