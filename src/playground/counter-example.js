class Counter extends React.Component {

	constructor(props) {
		super(props);

		this.onAddClick = this.onAddClick.bind(this);
		this.onSubstractClick = this.onSubstractClick.bind(this)
		this.onResetClick = this.onResetClick.bind(this);

		this.state = {
			count: props.count
		};
	}


	onAddClick(e) {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1
			};
		});
	}

	onSubstractClick(e) {
		this.setState((prevState) => {
			return {
				count: prevState.count - 1
			};
		});
	}

	onResetClick() {
		this.setState(() => {
			return {
				count: 0
			};
		});
	}

	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.onAddClick}>+1</button>
				<button onClick={this.onSubstractClick}>-1</button>
				<button onClick={this.onResetClick}>reset</button>
			</div>
		);
	}


}


Counter.defaultProps = {
	count: 0
};

ReactDOM.render(<Counter />, document.getElementById('app'));




// /*
// const user = {
// 	name: 'Gasha',
// 	age: 38,
// 	location: 'Belgrade'
// }

// function getLocation(location) {
// 	//return location || 'Unknown';

// 	if (location) {
// 		return <p>Location: {location}</p>;
// 	} else {
// 		return undefined;
// 	}
// }

// const templateTwo = (
// 	<div>
// 		<h1>{user.name ? user.name : 'Anonymous'}</h1>
// 		{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
// 		{getLocation(user.location)}
// 	</div>
// );
// */

// let count = 0;

// const addOne = () => {
// 	console.log('+1');
// 	count++;
// 	renderCounterApp();
// };

// const substractOne = () => {
// 	console.log('-1');
// 	count--;
// 	renderCounterApp();
// };

// const resetCounter = () => {
// 	console.log('reset');
// 	count = 0;
// 	renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {

// 	const templateTwo = (
// 		<div>
// 			<h1>Count: {count}</h1>
// 			<button onClick={addOne}>+1</button>
// 			<button onClick={substractOne}>-1</button>
// 			<button onClick={resetCounter}>reset</button>
// 		</div>
// 	);

// 	ReactDOM.render(templateTwo, appRoot);

// };

// renderCounterApp();
