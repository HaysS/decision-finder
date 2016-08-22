var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

//controllers
var questionController = require("./controllers/questionController");
var completedQuestionController = require("./controllers/completedQuestionController");


//Express request pipeline
var app = express();
app.use(express.static(path.join(__dirname,"../app/dist")));
console.log(bodyParser.json());
app.use(bodyParser.json());
app.use("/api", questionController);
app.use("/api", completedQuestionController);

app.listen(7777, function(){
	console.log("Started listening on port", 7777);
});

//Connect to mongodb database
mongoose.connect("mongodb://localhost/decisionfinder");