'use strict';

console.log('App.js is running');

var app = {
	title: 'Indecision App',
	subtitle: 'Can\'t decide what to do? We can help!',
	options: ['one', 'two']
};

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	app.subtitle && React.createElement(
		'p',
		null,
		app.subtitle
	),
	React.createElement(
		'p',
		null,
		app.options && app.options.length > 0 ? 'Here are your options: ' + app.options.join(',') : 'No options'
	)
);

/*
const user = {
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

const templateTwo = (
	<div>
		<h1>{user.name ? user.name : 'Anonymous'}</h1>
		{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
		{getLocation(user.location)}
	</div>
);
*/

var count = 0;

var addOne = function addOne() {
	console.log('+1');
	count++;
	renderCounterApp();
};

var substractOne = function substractOne() {
	console.log('-1');
	count--;
	renderCounterApp();
};

var resetCounter = function resetCounter() {
	console.log('reset');
	count = 0;
	renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {

	var templateTwo = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			'Count: ',
			count
		),
		React.createElement(
			'button',
			{ onClick: addOne },
			'+1'
		),
		React.createElement(
			'button',
			{ onClick: substractOne },
			'-1'
		),
		React.createElement(
			'button',
			{ onClick: resetCounter },
			'reset'
		)
	);

	ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
