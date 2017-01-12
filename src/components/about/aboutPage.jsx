"use strict";

var React = require('react');

var About = React.createClass({
	render: function(){
		return (
			<div>
				<h1>About</h1>
				<p>This is a simle To Do App</p>
				<small>The folowing are the technologies used:</small>
				<ul>
					<li>React</li>
					<li>React Router</li>
					<li>Flux</li>
					<li>Node</li>
					<li>Browserify</li>
					<li>Bootstrap</li>
				</ul>
			</div>
		);
	}
});

module.exports = About;