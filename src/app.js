'use strict';

// stateless functional component


class IndecisionApp extends React.Component {

	constructor(props) {
		super(props);

		//#region Bindings

		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);

		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);

		//#endregion


		this.state = {
			options: []
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

	handleAddOption(option) {
		if (!option) {
			return 'Enter valid value';
		} else if (this.state.options.indexOf(option) > -1) {
			return 'Option already exists';
		}

		this.setState((prevState) => {
			return {
				options: prevState.options.concat([option])
			}
		})
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
				<AddOption
					handleAddOption={this.handleAddOption}
				/>
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

/*
const Action = (props) => {
	return (
		<div>
			<button
				onClick={props.handlePick}
				disabled={!props.hasOptions}
			>
				What should I do?
					</button>
		</div>
	);
}
*/

/*
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
*/

const Action = (props) => {
	return (
		<div>
			<button
				onClick={props.handlePick}
				disabled={props.hasOptions}
			>
				What should I do?
					</button>
		</div>
	);
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

	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined
		}
	}

	handleAddOption(e) {

		e.preventDefault();

		const option = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);

		this.setState(() => {
			return {
				error: error
			}
		})


		e.target.elements.option.value = "";
	}


	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" />
					<button>Add</button>
				</form>
			</div>
		)
	}
}

/*
const User = (props) => {
	return (
		<div>
			<p>Name: {props.name}</p>
			<p>Age: {props.age}</p>
		</div>
	)
}
*/


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// ReactDOM.render(<User name="Gasha" age="38" />, document.getElementById('app'));