var React = require("react");
var actions = require("../actions/QuestionActions.js");

module.exports = React.createClass({
	getInitialState: function() {
		return{
			questionNum: this.props.info.questionNum,
			question: this.props.info.question,
			answers: [this.props.info.answer1, this.props.info.answer2, 
						this.props.info.answer3, this.props.info.answer4],
			selectedAnswer: ""
		}
	},
	addSelectedAnswer:function(e) {
		e.preventDefault();

		var state = this.state;	
		var questionNum = this.state.questionNum;

		if(document.getElementById("question"+(questionNum)+"answer1").checked) {
			state.selectedAnswer = document.getElementById("question"+(questionNum)+"answer1").value;
		} else if(document.getElementById("question"+(questionNum)+"answer2").checked) {
			state.selectedAnswer = document.getElementById("question"+(questionNum)+"answer2").value;
		} else if(document.getElementById("question"+(questionNum)+"answer3").checked) {
			state.selectedAnswer = document.getElementById("question"+(questionNum)+"answer3").value;
		} else if(document.getElementById("question"+(questionNum)+"answer4").checked) {
			state.selectedAnswer = document.getElementById("question"+(questionNum)+"answer4").value;
		}

		this.setState(state);
		actions.addSelectedAnswer(this.state);	
		console.log(this.state.selectedAnswer);
	},
	render:function() {
		var questionNum = this.state.questionNum;

		return(
			<div className="row">
				<div className="page-header">
					<h2>{this.props.info.question}</h2>
				</div>
				<form className="form" onSubmit={this.addSelectedAnswer}> 
					{
						this.props.info.answers.map(function(answer, index) {
							return(
								<div className="radio">
									<div className="form-group">
										<input className="" type="radio"
id={"question"+(questionNum)+"answer"+(index+1)} name="answer" value={"question"+(questionNum)+"answer"+(index+1)} />
										<label className="" htmlFor={"question"+(questionNum)+"answer"+(index+1)}>
											{answer}
										</label>
									</div>
								</div>
							)
						})
					}
					<div className="form-group">
						<button className="btn" type="submit">Submit Answer</button>
					</div>
				</form>
			</div>
		)
	}
})