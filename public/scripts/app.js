'use strict';

var appRoot = document.getElementById('app');
var detailsVisible = false;

// functions
//////////////////////////////////

var toggleVisibility = function toggleVisibility() {
	detailsVisible = !detailsVisible;
	renderApp();
};

//////////////////////////////////

var renderApp = function renderApp() {

	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			'Visibility toggle'
		),
		React.createElement(
			'button',
			{ onClick: toggleVisibility },
			detailsVisible ? 'Hide details' : 'Show details'
		),
		React.createElement(
			'article',
			{ id: 'details', hidden: !detailsVisible },
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit, iste ullam reprehenderit fugiat culpa animi incidunt rem adipisci omnis! Aperiam voluptate nostrum nihil facere, ad quibusdam quas unde tenetur?'
		)
	);

	ReactDOM.render(template, appRoot);
};

renderApp();
