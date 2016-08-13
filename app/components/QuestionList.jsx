var React = require("react");
var Question = require("./Question.jsx");

module.exports = React.createClass({
	render:function() {
		return(
			<div className="row">
				<div className="col-lg-2">
			
				</div>
				<div className="col-lg-10">
					{
						this.props.questions.map(function(s, index) {
							return(
								<Question info={s} key={"question"+index} />
							)
						})
					}
				</div>
			</div>
		)
	}
});