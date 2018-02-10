'use strict';

console.log('App.js is running');

var app = {
	title: 'Indecision App',
	subtitle: 'Can\'t decide what to do? We can help!'
}

var template = (
	<div>
		<h1>{app.title}</h1>
		<p>{app.subtitle}</p>
	</div>
);


var user = {
	name: 'Gasha',
	age: 38,
	location: 'Belgrade'
}

var templateTwo = (
	<div>
		<h1>{user.name}</h1>
		<p>Age: {user.age}</p>
		<p>Location: {user.location}</p>
	</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);