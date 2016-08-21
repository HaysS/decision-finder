var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

//data initialization function
var initializeQuestionsInDB = require("./data/initializeQuestionsInDB");
initializeQuestionsInDB(); //populates the database with data from Questions.json

//controllers
var questionController = require("./controllers/questionController");

//Express request pipeline
var app = express();
app.use(express.static(path.join(__dirname,"../app/dist")));
console.log(bodyParser.json());
app.use(bodyParser.json());
app.use("/api", questionController);

app.listen(7777, function(){
	console.log("Started listening on port", 7777);
});

//Connect to mongodb database
mongoose.connect("mongodb://localhost/moodmodulator");