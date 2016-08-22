var $ = require("jquery");
var promise = require("es6-promise");

var resourceUrl = "http://localhost:7777/api/completedQuestions";

module.exports = {
	getCompletedQuestions: function() {
		var Promise = promise.Promise;
		return new Promise(function (resolve, reject) {
			$.ajax({
				url: resourceUrl,
				method: "GET",
				dataType: "json",
				success: resolve,
				error: reject
			});
		});
	},
	addCompletedQuestion: function(completedQuestion) {
		var Promise = promise.Promise;
		return new Promise(function (resolve, reject) {
			$.ajax({
				url: resourceUrl,
				data: JSON.stringify(completedQuestion),
				method: "POST",
				dataType: "json",
				contentType: "application/json",
				success: resolve,
				error: reject
			});
		});
	},
	deleteCompletedQuestion: function(completedQuestion) {
		var Promise = promise.Promise;
		return new Promise(function (resolve, reject) {
			$.ajax({
				url: resourceUrl + "/" + completedQuestion._id,
				method: "DELETE",
				dataType: "json",
				success: resolve,
				error: reject
			});
		});
	},
	initializeCompletedQuestions: function() {
		var Promise = promise.Promise;
		return new Promise(function (resolve, reject) {
			$.ajax({
				url: resourceUrl,
				method: "PUT",
				dataType: "json",
				success: resolve,
				error: reject
			});
		});
	}
}