var dispatcher = require("../dispatcher");

module.exports = {
	addSelectedAnswer: function(question) {
		dispatcher.dispatch({
			question: question,
			type: "question:addSelectedAnswer"
		});
	},
	completeQuestion: function(question) {
		dispatcher.dispatch({
			question: question,
			type: "question:completeQuestion"
		});
	}
}