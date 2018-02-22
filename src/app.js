'use strict';

class IndecisionApp extends React.Component {
	render() {

		const title = 'Indecision';
		const subtitle = 'Put your life in the hands of a computer';
		const options = ['some thing', 'or this', 'even this one']

		return (
			<div>
				<Header title={title} subtitle={subtitle} bljuc="1" />
				<Action />
				<Options options={options} />
				<AddOption />
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
		);
	}

}

class Action extends React.Component {
	render() {
		return (
			<div>
				<button>What should I do?</button>
			</div>
		);
	}
}

class Options extends React.Component {
	render() {
		return (
			<div>
				{
					this.props.options.map((option, index) => <p key={`option-${index}`}>{option}</p>)
				}
			</div>
		)
	}
}

class Option extends React.Component {
	render() {
		return (
			<div>
				<p>single option</p>
			</div>
		);
	}
}


class AddOption extends React.Component {
	render() {
		return (
			<div>
				<p>Here goes add option form</p>
			</div>
		)
	}
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));