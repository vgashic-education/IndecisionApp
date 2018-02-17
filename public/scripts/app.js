'use strict';

console.log('App.js is running');

var app = {
	title: 'Indecision App',
	subtitle: 'Can\'t decide what to do? We can help!',
	options: []
};

var onMakeDecision = function onMakeDecision() {

	var randomNumber = Math.floor(Math.random() * app.options.length);
	console.log(randomNumber);

	var option = app.options[randomNumber];
	console.log(option);
};

var renderApp = function renderApp() {

	var appRoot = document.getElementById('app');

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
		),
		React.createElement(
			'button',
			{ disabled: app.options.length === 0, onClick: onMakeDecision },
			'What should I do?'
		),
		React.createElement(
			'button',
			{ onClick: clearOptions },
			'Remove all'
		),
		React.createElement(
			'ol',
			null,
			app.options.map(function (option, index) {
				return React.createElement(
					'li',
					{ key: 'option-' + index },
					option
				);
			})
		),
		React.createElement(
			'form',
			{ onSubmit: onFormSubmit },
			React.createElement('input', { type: 'text', name: 'option' }),
			React.createElement(
				'button',
				null,
				'Add Option'
			)
		)
	);

	ReactDOM.render(template, appRoot);
};

var onFormSubmit = function onFormSubmit(e) {

	e.preventDefault();

	var option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';

		renderApp();
	}
};

var clearOptions = function clearOptions(e) {

	app.options = [];

	renderApp();
};

renderApp();
