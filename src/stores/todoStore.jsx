"use strict";

var Dispatcher		= require('../dispatcher/appDispatcher.jsx');
var ActionTypes		= require('../constants/actionTypes.jsx');
var EventEmitter	= require('events').EventEmitter;
var assign			= require('object-assign');
var CHANGE_EVENT	= 'change';
var _				= require('lodash');

var _todos = [];

var TodoStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(cb){
		this.on(CHANGE_EVENT, cb);
	},

	removeChangeListener: function(cb){
		this.removeListener(CHANGE_EVENT, cb);
	},

	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},

	getAllTodos: function(){
		return _todos;
	},

	getTodoById: function(id){
		return _.find(_todos, {id: id});
	}
});

Dispatcher.register(function(action){
	switch(action.actionType){
		case ActionTypes.INIT:
			_todos = action.initialData.todos;
			TodoStore.emitChange();
			break;
		case ActionTypes.CREATE_TODO:
			_todos.push(action.todo);
			TodoStore.emitChange();
			break;
		case ActionTypes.UPDATE_TODO:
			var existingTodo = _.find(_todos, {id: action.todo.id});
			var existingTodoIndex = _.indexOf(_todos, existingTodo);
			_todos.splice(existingTodoIndex, 1, action.todo);
			TodoStore.emitChange();
			break;
		case ActionTypes.DELETE_TODO:
			_.remove(_todos, function(todo){
				return action.id === todo.id;
			});
			TodoStore.emitChange();
			break;
		default:

	}
});

module.exports = TodoStore;