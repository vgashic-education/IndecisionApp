'use strict';

class Visibility extends React.Component {

	constructor(props) {

		super(props);

		this.visibilityToggle = this.visibilityToggle.bind(this);

		this.state = {
			visible: false,
			buttonCaption: 'Show'
		};

	}

	visibilityToggle(e) {
		this.setState((prevState) => {
			console.log(prevState.visible);

			return {
				visible: !prevState.visible,
				buttonCaption: !prevState.visible ? 'Hide' : 'Show'
			};
		});
	}

	render() {
		return (
			<div>
				<h1>Visibility app</h1>
				<button onClick={this.visibilityToggle}>{this.state.buttonCaption}</button>
				{(this.state.visible && (<article>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, expedita incidunt! Voluptatem et nihil rerum molestias! Soluta quidem incidunt quas ducimus aliquam, omnis ea. Fugiat, labore molestiae. Eaque, vel cum.
				</article>))}
			</div>
		);
	}

}

ReactDOM.render(<Visibility />, document.getElementById('app'));

/*
const appRoot = document.getElementById('app');
let detailsVisible = false;

// functions
//////////////////////////////////

const toggleVisibility = () => {
	detailsVisible = !detailsVisible;
};

//////////////////////////////////

const renderApp = () => { }

const template = (

	<div>
		<h1>Visibility toggle</h1>
		<button onClick={toggleVisibility}>{detailsVisible ? 'Hide details' : 'Show details'}</button>
		{detailsVisible && (
			<article>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit, iste ullam reprehenderit fugiat culpa animi incidunt rem adipisci omnis! Aperiam voluptate nostrum nihil facere, ad quibusdam quas unde tenetur?
				</article>
		)}
	</div>

);

ReactDOM.render(template, appRoot);


renderApp();
*/