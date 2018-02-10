'use strict';

console.log('App.js is running');

var app = {
	title: 'Indecision App',
	subtitle: 'my first react app'
}

var template = (
	<div>
		<h1>{app.title}</h1>
		<h3>{app.subtitle}</h3>
	</div>
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