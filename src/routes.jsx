"use strict";

var React			= require('react');
var	Router			= require('react-router');
var	DefaultRoute	= Router.DefaultRoute;
var	Route			= Router.Route;
var NotFoundRoute	= Router.NotFoundRoute;
var Redirect		= Router.Redirect;

var routes = (
	<Route name="app" path="/" handler={require('./components/app.jsx')}>
		<DefaultRoute name="home" handler={require('./components/homePage.jsx')} />
		<Route name="about" handler={require('./components/about/aboutPage.jsx')} />
		<Route name="addTodo" path="todo" handler={require('./components/todo/manageTodoPage.jsx')} />
		<Route name="editTodo" path="todo/:id" handler={require('./components/todo/manageTodoPage.jsx')} />
		<NotFoundRoute handler={require('./components/404.jsx')} />
		<Redirect from="about-us" to="about" />
	</Route>
);

module.exports = routes;