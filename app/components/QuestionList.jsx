var React = require("react");
var Question = require("./Question.jsx");
var actions = require("../actions/QuestionListActions.js");

module.exports = React.createClass({
	getInitialState:function() {
		return{
			_id: this.props.info._id,
			__v: this.props.info.__v,
			listNum: this.props.info.listNum,
			questions: this.props.info.questions,
			completedQuestions: this.props.info.completedQuestions
		}
	},
	completeQuestionList:function(event) {
		event.preventDefault();
		actions.completeQuestionList(this.state);
	},
	render:function() {
		var finishButton;
		
		if(this.props.info.questions.length == 0) {
			finishButton = <a onClick={this.completeQuestionList} className="btn btn-primary btn-lg btn-block">Finish</a>
		}

		return(
			<div>
			{
				this.props.info.questions.map(function(q) {
					return(
							<Question info={q} key={"question"+q.questionNum} />
					)
				})
			}
			{
				//Will not be included if finishButton is left undefined by previous if statement
				finishButton
			}
			</div>
		)
	}
});