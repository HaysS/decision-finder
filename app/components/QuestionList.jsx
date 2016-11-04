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
	render:function() {
		return(
			<div>
			{
				this.props.info.questions.map(function(q) {
					return(
							<Question info={q} key={"question"+q.questionNum} />
					)
				})
			}
			</div>
		)
	}
});