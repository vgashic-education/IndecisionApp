'use strict';

const appRoot = document.getElementById('app');
let detailsVisible = false;

// functions
//////////////////////////////////

const toggleVisibility = () => {
	detailsVisible = !detailsVisible;
	renderApp();
};

//////////////////////////////////

const renderApp = () => {

	const template = (

		<div>
			<h1>Visibility toggle</h1>
			<button onClick={toggleVisibility}>{detailsVisible ? 'Hide details' : 'Show details'}</button>
			<article id='details' hidden={!detailsVisible}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit, iste ullam reprehenderit fugiat culpa animi incidunt rem adipisci omnis! Aperiam voluptate nostrum nihil facere, ad quibusdam quas unde tenetur?
			</article>
		</div>

	);

	ReactDOM.render(template, appRoot);

}

renderApp();