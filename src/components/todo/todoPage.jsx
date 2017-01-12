"use strict";

var React		= require('react');
var TodoStore	= require('../../stores/todoStore.jsx');
var TodoAction	= require('../../actions/todoAction.jsx');
var	TodoList	= require('./todoList.jsx');

var TodoPage = React.createClass({
	getInitialState: function() {
		return {
			todos: TodoStore.getAllTodos()
		};
	},

	componentWillMount: function(){
		TodoStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function(){
		TodoStore.removeChangeListener(this._onChange);
	},

	_onChange: function(){
		this.setState({ todos: TodoStore.getAllTodos() });
	},

	render: function(){
		return (
			<TodoList todos={this.state.todos}/>
		);
	}
});

module.exports = TodoPage;