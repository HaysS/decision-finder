var React = require("react");

module.exports = React.createClass({
	render:function() {
		return(
			<div className="row">
				<div className="page-header">
					<h2>{this.props.info.question}</h2>
				</div>
				<form className="form" onSubmit="#"> 
					{
						this.props.info.answers.map(function(answer, index) {
							return(
								<div className="form-group">
									<input className="form-control col-lg-2 pull-left-lg" type="radio" 
id={"answer"+index} name="answer" value={index} />
									<label className="control-label col-lg-9 pull-right-lg" htmlFor={"answer" + index}>
										{answer}
									</label>
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