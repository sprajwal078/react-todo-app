"use strict";

var React		= require('react');
var Link		= require('react-router').Link;
var TodoAction	= require('../../actions/todoAction.jsx');
var toastr		= require('toastr');


var TodoList = React.createClass({
	propTypes: {
		todos: React.PropTypes.array.isRequired
	},

	deleteTodo: function(id, event){
		event.preventDefault();
		TodoAction.deleteTodo(id);
		toastr.success("Todo Removed.");
	},

	getStatus: function(status){
		switch(status){
			case "ongoing":
				return "info";
			case "done":
				return "success";
			default:
				return "warning";
		}
	},

	render: function(){
		function createTodoRow(todo){
			return (
				<tr key={todo.id}>
					<td>{todo.title}</td>
					<td>{todo.description}</td>
					<td><span className={"label label-" + this.getStatus(todo.status)}>{todo.status}</span></td>
					<td>
						<Link to="editTodo" params={{id: todo.id}}>Edit</Link> <a onClick={this.deleteTodo.bind(this, todo.id)} href="#">Delete</a>
					</td>
				</tr>
			);
		}

		return (
			<div className="table-responsive">
				<table className="table table-hover table-bordered">
					<thead>
						<tr>
							<th>Title</th>
							<th>Description</th>
							<th>Staus</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{this.props.todos.map(createTodoRow, this)}
					</tbody>
				</table>
				<Link to="addTodo" className="btn btn-success">Add New</Link>
			</div>
		);
	}
});

module.exports = TodoList;