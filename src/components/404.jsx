"use strict";

var React	= require('react');
var Link	= require('react-router').Link;

var NotFound = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Page Not Found</h1>
				<p>Sorry, the requested page does not exist </p>
				<p><Link to="app">Go back to Home</Link></p>
			</div>
		);
	}
});

module.exports = NotFound;