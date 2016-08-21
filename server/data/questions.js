var mongoose = require("mongoose");
var questionSchema = mongoose.Schema({
	questionNum: Number,
	question: String,
	answers: [],
	selectedAnswer: String
});

module.exports = mongoose.model("questions", questionSchema);