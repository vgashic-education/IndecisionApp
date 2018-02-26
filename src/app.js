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

	handlePick() {
		alert('handlePick');
	}

	render() {
		return (
			<div>
				<button onClick={this.handlePick}>What should I do?</button>
			</div>
		);
	}
}


class Options extends React.Component {

	constructor(props) {
		super(props);
		this.handleRemoveAll = this.handleRemoveAll.bind(this);
	}

	handleRemoveAll() {
		console.log(this.props.options);
	}

	render() {
		return (
			<div>
				<button onClick={this.handleRemoveAll.bind(this)}>Remove all options
				</button>
				{
					this.props.options.map((option, index) => <Option key={`option-${index}`} optionText={option} />)
				}
			</div>
		)
	}
}

class Option extends React.Component {


	render() {
		return (
			<div>
				Option: {this.props.optionText}
			</div>
		);
	}
}


class AddOption extends React.Component {

	handleAddOption(e) {

		e.preventDefault();

		console.log(e);

		const option = e.target.elements.option.value.trim();

		console.log(options);


		if (option) {
			options.push(option)
		}

		e.target.elements.options.value = "";
	}


	render() {
		return (
			<form onSubmit={this.handleAddOption}>
				<input type="text" name="option" />
				<button>Add</button>
			</form>
		)
	}
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));