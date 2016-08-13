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
								<div className="radio">
									<div className="form-group">
										<input className="" type="radio" 
id={"answer"+(index+1)} name="answer" value={(index+1)} />
										<label className="" htmlFor={"answer" + (index+1)}>
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