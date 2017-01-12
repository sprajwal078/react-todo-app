"use strict";

var React		= require('react');
var TodoForm	= require('./todoForm.jsx');
var Router		= require('react-router');
var toastr		= require('toastr');
var TodoAction	= require('../../actions/todoAction.jsx');
var TodoStore	= require('../../stores/todoStore.jsx');

var ManageTodoPage = React.createClass({
	mixins: [
		Router.Navigation
	],

	statics: {
		willTransitionFrom: function(transition, component){
			if(component.state.dirty && !confirm('Leave without saving?')){
				transition.abort();
			}
		}
	},

	getInitialState: function(){
		return {
			todo: {id: '', title: '', description: ''},
			errors: {},
			dirty: false
		};
	},

	componentWillMount: function() {
		var todoId = this.props.params.id;
		if(todoId){
			this.setState({todo: TodoStore.getTodoById(todoId)});
		}
	},

	setTodoState: function(event){

		var field = event.target.name;
		var value = event.target.value;
		if(value){
			this.setState({dirty: true});
		}else{
			this.setState({dirty: false});
		}
		this.state.todo[field] = value;
		return this.setState({todo: this.state.todo});

	},

	todoFormIsValid: function(){
		var valid = true;
		this.state.errors = {};
		if(this.state.todo.title.length < 4){
			this.state.errors.title = 'Todo title must be at least 4 characters.';
			valid = false;
		}

		if(this.state.todo.description.length < 8){
			this.state.errors.description = 'Todo description must be at least 8 characters.';
			valid = false;
		}

		this.setState({errors: this.state.errors});
		return valid;
	},

	saveTodo: function(event){
		event.preventDefault();
		if (!this.todoFormIsValid()) {
			return;
		}
		if(this.state.todo.id){
			TodoAction.updateTodo(this.state.todo);
		}else{
			TodoAction.createTodo(this.state.todo);
		}
		this.setState({dirty: false});
		toastr.success('Todo Saved.');
		this.transitionTo('home');
	},

	render: function(){
		return (
			<TodoForm todo={this.state.todo} onChange={this.setTodoState} onSave={this.saveTodo} errors={this.state.errors} />
		);
	}
});

module.exports = ManageTodoPage;