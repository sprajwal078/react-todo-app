"use strict";

//For mocking web api
var todos	= require('./todoData.json'),
	_		= require('lodash');


var _generateId = function(todo){
	return todo.title.split(" ").join("").toLowerCase() + '-' + Math.floor(Date.now());
};

var _clone = function(obj){
	return JSON.parse(JSON.stringify(obj));
};

var TodoApi = {
	getAllTodos: function(){
		return _clone(todos);
	},

	getTodoById: function(id){
		var todo = _.find(todos, {id: id});
		return _clone(todo);
	},

	saveTodo: function(todo){
		if(todo.id){
			var existingTodoIndex = _.indexOf(todos, _.find(todos, {id: todo.id}));
			todos.splice(existingTodoIndex, 1, todo);

		}else{
			todo.id = _generateId(todo);
			todo.status = "pending";
			todos.push(todo);
		}
		return _clone(todo);
	},

	deleteTodo: function(id){
		_.remove(todos, {id: id});
	}
};

module.exports = TodoApi;