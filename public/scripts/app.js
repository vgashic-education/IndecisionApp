'use strict';

console.log('App.js is running');

var app = {
	title: 'Indecision App',
	subtitle: 'my first react app'
};

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	React.createElement(
		'h3',
		null,
		app.subtitle
	)
);

/*
var user = {
	name: 'Gasha',
	age: 38,
	location: 'Beograd'
}


var templateTwo = (
	<div>
		<h1>{user.name}</h1>
		<p>Age: {user.age}</p>
		<p>Location: {user.location}</p>
	</div>
);
*/
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
