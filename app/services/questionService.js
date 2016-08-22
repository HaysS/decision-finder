var $ = require("jquery");
var promise = require("es6-promise");

var resourceUrl = "http://localhost:7777/api/questions";

module.exports = {
	addSelectedAnswer: function(question) {
		var Promise = promise.Promise;
		return new Promise(function (resolve, reject) {
			$.ajax({
				url: resourceUrl,
				data: JSON.stringify(question),
				method: "POST",
				dataType: "json",
				contentType: "application/json",
				success: resolve,
				error: reject
			});
		});
	},
	getQuestions: function() {
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
	deleteQuestion: function(question) {
		var Promise = promise.Promise;
		return new Promise(function (resolve, reject) {
			$.ajax({
				url: resourceUrl + "/" + question._id,
				method: "DELETE",
				dataType: "json",
				success: resolve,
				error: reject
			});
		});
	},
	initializeQuestions: function() {
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