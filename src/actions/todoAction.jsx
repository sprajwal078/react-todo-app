"use strict";

var Dispatcher	= require('../dispatcher/appDispatcher.jsx');
var TodoApi		= require('../api/todoApi.jsx');
var ActionTypes = require('../constants/actionTypes.jsx');

var TodoActions = {
	createTodo: function(todo){
		var newTodo = TodoApi.saveTodo(todo);
		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_TODO,
			todo: newTodo
		});
	},

	updateTodo: function(todo){
		var updatedTodo = TodoApi.saveTodo(todo);
		Dispatcher.dispatch({
			actionType: ActionTypes.UPDATE_TODO,
			todo: updatedTodo
		});
	},

	deleteTodo: function(id){
		TodoApi.deleteTodo(id);
		Dispatcher.dispatch({
			actionType: ActionTypes.DELETE_TODO,
			id: id
		});
	}
};

module.exports = TodoActions;