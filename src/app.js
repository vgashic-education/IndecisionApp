'use strict';

console.log('App.js is running');


const app = {
	title: 'Indecision App',
	subtitle: 'Can\'t decide what to do? We can help!',
	options: []
}



const renderApp = () => {

	const appRoot = document.getElementById('app');

	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.options && app.options.length > 0 ? `Here are your options: ${app.options.join(',')}` : 'No options'}</p>
			<p>{app.options.length}</p>

			<button onClick={clearOptios}>Remove all</button>

			<ol>
				{
					app.options.map((option, index) => <li id={`option-${index}`}>{option}</li>)
				}
			</ol>

			<form onSubmit={onFormSubmit}>
				<input type="text" name="option" />
				<button>Add Option</button>
			</form>
		</div>
	);

	ReactDOM.render(template, appRoot);

}


const onFormSubmit = (e) => {

	e.preventDefault();

	const option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';

		renderApp();
	}

}

const clearOptios = (e) => {

	app.options = [];

	renderApp();

}

renderApp();