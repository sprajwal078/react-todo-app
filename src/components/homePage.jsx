"use strict";

var React		= require('react');
var Todos		= require('./todo/todoPage.jsx');

var Home = React.createClass({
	render: function(){
		return (
			<div>
				<div className="jumbotron">
					<h1>To Do</h1>
					<p>Simple to-do app using React, React Router and Flux</p>
				</div>
				<Todos />
			</div>
		);
	}
});

module.exports = Home;