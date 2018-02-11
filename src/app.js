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
}

function getLocation(location) {
	//return location || 'Unknown';

	if (location) {
		return <p>Location: {location}</p>;
	} else {
		return undefined;
	}
}

var templateTwo = (
	<div>
		<h1>{user.name ? user.name : 'Anonymous'}</h1>
		{(user.age && user.age) >= 18 && <p>Age: {user.age}</p>}
		{getLocation(user.location)}
	</div>
);



var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);