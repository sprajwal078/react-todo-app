"use strict";

var React = require('react');

var Input = React.createClass({
	propTypes: {
		name: React.PropTypes.string.isRequired,
		label: React.PropTypes.string.isRequired,
		onChange: React.PropTypes.func.isRequired,
		placeholder: React.PropTypes.string,
		value: React.PropTypes.string,
		error: React.PropTypes.string
	},

	render: function(){
		var wrapperClass = 'form-group';
		if(this.props.error && this.props.error.length > 0){
			wrapperClass += " has-error";
		}

		function createOptions(data, index){
			return (
				<option key={data.id || index }>{data.option || data}</option>
			);
		}

		switch(this.props.type){
			case 'textarea':
				return (
					<div className={wrapperClass}>
						<label htmlFor={this.props.name}>{this.props.label}</label>
						<textarea
							name={this.props.name}
							className="form-control"
							placeholder={this.props.placeholder || this.props.label}
							ref={this.props.name}
							value={this.props.value}
							onChange={this.props.onChange}></textarea>
						<div className="input">{this.props.error}</div>
					</div>
				);
			case 'select':
				return (
					<div className={wrapperClass}>
						<label htmlFor={this.props.name}>{this.props.label}</label>
						<select
							name={this.props.name}
							className="form-control"
							ref={this.props.name}
							value={this.props.value}
							onChange={this.props.onChange} >
								{this.props.options.map(createOptions, this)}
							</select>
						<div className="input">{this.props.error}</div>
					</div>
				);
			default:
				return (
					<div className={wrapperClass}>
						<label htmlFor={this.props.name}>{this.props.label}</label>
						<input type="text"
							name={this.props.name}
							className="form-control"
							placeholder={this.props.placeholder || this.props.label}
							ref={this.props.name}
							value={this.props.value}
							onChange={this.props.onChange} />
						<div className="input">{this.props.error}</div>
					</div>
				);
		}
	}
});

module.exports = Input;