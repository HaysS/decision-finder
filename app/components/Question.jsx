var React = require("react");
var actions = require("../actions/QuestionActions.js");

module.exports = React.createClass({
	getInitialState:function() {
		return{
			_id: this.props.info._id,
			__v: this.props.info.__v,
			questionNum: this.props.info.questionNum,
			question: this.props.info.question,
			answers: this.props.info.answers,
			selectedAnswer: ""
		}
	},
	addSelectedAnswer:function(e) {
		e.preventDefault();

		var state = this.state;	
		var questionNum = this.state.questionNum;

		if(document.getElementById("question"+(questionNum)+"answer1").checked) {
			state.selectedAnswer = "answer1";
		} else if(document.getElementById("question"+(questionNum)+"answer2").checked) {
			state.selectedAnswer = "answer2";
		} else if(document.getElementById("question"+(questionNum)+"answer3").checked) {
			state.selectedAnswer = "answer3";
		} else if(document.getElementById("question"+(questionNum)+"answer4").checked) {
			state.selectedAnswer = "answer4";
		} else {
			return //User hit submit without selecting value
		}

		this.setState(state);
		actions.addSelectedAnswer(this.state);	
		actions.completeQuestion(this.state);
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
						this.props.info.answers.map(function(answer, i) {
							var id = ("question"+(questionNum)+"answer"+(i+1));
							return(
								<div className="radio" key={id+"-radio"}>
									<div className="form-group" key={id+"-form-group"}>
										<input type="radio" key={id} id={id} name="answer" value={id} />
										<label key={id+"-label"} htmlFor={id}>
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