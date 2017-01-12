"use strict";

var Dispatcher = require('../dispatcher/appDispatcher.jsx');
var ActionTypes = require('../constants/actionTypes.jsx');
var TodoApi = require('../api/todoApi.jsx');

var InitializeActions = {
	initApp: function(){
		Dispatcher.dispatch({
			actionType: ActionTypes.INIT,
			initialData: {
				todos: TodoApi.getAllTodos()
			}
		});
	}
};

module.exports = InitializeActions;