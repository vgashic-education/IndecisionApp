'use strict';




class IndecisionApp extends React.Component {

	constructor(props) {
		super(props);

		//#region Bindings

		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);

		this.handlePick = this.handlePick.bind(this);

		//#endregion


		this.state = {
			options: ['Jen', 'dva', 'tri']
		};

	};

	//#region Methods

	randomNumber(maxValue) {
		let randomNumber = Math.floor(Math.random() * maxValue);

		return randomNumber;
	}

	handleDeleteOptions() {

		this.setState(() => {
			return {
				options: []
			};
		});

	}

	handlePick() {
		let randomIndex = this.randomNumber(this.state.options.length);

		alert(`You should ${this.state.options[randomIndex]}`);
	}

	//#endregion

	render() {

		const title = 'Indecision';
		const subtitle = 'Put your life in the hands of a computer';

		return (
			<div>
				<Header title={title} subtitle={subtitle} bljuc="1" />
				<Action
					hasOptions={this.state.options.length > 0}
					handlePick={this.handlePick}
				/>
				<Options
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
				/>
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
				<button
					onClick={this.props.handlePick}
					disabled={!this.props.hasOptions}
				>
					What should I do?
					</button>
			</div>
		);
	}
}


class Options extends React.Component {

	render() {
		return (
			<div>
				<button onClick={this.props.handleDeleteOptions}>Remove all
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
				{this.props.optionText}
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