var React = require("react");
var QuestionList = require("./QuestionList.jsx");

module.exports = React.createClass({
	render:function() {
		return(
			<div className="row">
				<div className="col-lg-2">
			
				</div>
				<div className="col-lg-10">
					<QuestionList info={this.props.info.questionLists} key={"list1"} />
				</div>
			</div>
		)
	}
});