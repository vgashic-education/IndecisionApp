'use strict';

console.log('App.js is running');

/*
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
*/

var user = {
	name: 'Gasha',
	age: 38,
	location: 'Belgrade'
};

function getLocation(location) {
	//return location || 'Unknown';

	if (location) {
		return React.createElement(
			'p',
			null,
			'Location: ',
			location
		);
	} else {
		return undefined;
	}
}

var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		user.name ? user.name : 'Anonymous'
	),
	(user.age && user.age) >= 18 && React.createElement(
		'p',
		null,
		'Age: ',
		user.age
	),
	getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
