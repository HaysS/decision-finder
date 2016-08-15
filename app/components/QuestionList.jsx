var React = require("react");
var Question = require("./Question.jsx");

module.exports = React.createClass({
	render:function() {
		var finishButton;
		if(this.props.questions.length == 0) {
			finishButton = <button type="button" className="btn btn-primary btn-lg btn-block">Finish</button>
		}

		return(
			<div className="row">
				<div className="col-lg-2">
			
				</div>
				<div className="col-lg-10">
					{
						this.props.questions.map(function(q) {
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
			</div>
		)
	}
});