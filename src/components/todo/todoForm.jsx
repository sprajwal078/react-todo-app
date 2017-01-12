"use strict";

var React		= require('react');
var Input	= require('../common/textInput.jsx');

var TodoForm = React.createClass({
	propTypes: {
		todo: React.PropTypes.object.isRequired,
		onChange: React.PropTypes.func.isRequired,
		onSave: React.PropTypes.func.isRequired,
		errors: React.PropTypes.object
	},

	render: function(){
		var status = ['pending', 'done', 'ongoing'];
		return (
			<div className="col-md-4">
				<h1>Manage Todo</h1>
				<form>
					<Input
						name="title"
						label="Title"
						value={this.props.todo.title}
						onChange={this.props.onChange}
						error={this.props.errors.title} />
					<Input
						type="textarea"
						label="Description"
						name="description"
						ref="description"
						value={this.props.todo.description}
						onChange={this.props.onChange}
						error={this.props.errors.description} />

					<Input
						type="select"
						name="status"
						label="Status"
						ref="status"
						value={this.props.todo.status}
						options={status}
						onChange={this.props.onChange} />

					<button type="submit" className="btn btn-success" onClick={this.props.onSave}>Save</button>
				</form>
			</div>
		);
	}
});

module.exports = TodoForm;