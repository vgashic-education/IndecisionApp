
/*
const user = {
	name: 'Gasha',
	age: 38,
	location: 'Belgrade'
}

function getLocation(location) {
	//return location || 'Unknown';

	if (location) {
		return <p>Location: {location}</p>;
	} else {
		return undefined;
	}
}

const templateTwo = (
	<div>
		<h1>{user.name ? user.name : 'Anonymous'}</h1>
		{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
		{getLocation(user.location)}
	</div>
);
*/

let count = 0;

const addOne = () => {
	console.log('+1');
	count++;
	renderCounterApp();
};

const substractOne = () => {
	console.log('-1');
	count--;
	renderCounterApp();
};

const resetCounter = () => {
	console.log('reset');
	count = 0;
	renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {

	const templateTwo = (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={addOne}>+1</button>
			<button onClick={substractOne}>-1</button>
			<button onClick={resetCounter}>reset</button>
		</div>
	);

	ReactDOM.render(templateTwo, appRoot);

};

renderCounterApp();
