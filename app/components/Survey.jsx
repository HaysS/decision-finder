var React = require("react");
var QuestionList = require("./QuestionList.jsx");

module.exports = React.createClass({
	render:function() {
		return(
			<div className="row">
				<div className="col-lg-2">
			
				</div>
				<div className="col-lg-10">
					{this.props.questionLists.map(function(ql) {
						return(<QuestionList info={ql} key={"list1"} />)
					})}
				</div>
			</div>
		)
	}
});