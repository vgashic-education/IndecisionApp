'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
	_inherits(Counter, _React$Component);

	function Counter(props) {
		_classCallCheck(this, Counter);

		var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

		_this.onAddClick = _this.onAddClick.bind(_this);
		_this.onSubstractClick = _this.onSubstractClick.bind(_this);
		_this.onResetClick = _this.onResetClick.bind(_this);

		_this.state = {
			count: 0
		};
		return _this;
	}

	_createClass(Counter, [{
		key: 'onAddClick',
		value: function onAddClick(e) {
			this.setState(function (prevState) {
				return {
					count: prevState.count + 1
				};
			});
		}
	}, {
		key: 'onSubstractClick',
		value: function onSubstractClick(e) {
			this.setState(function (prevState) {
				return {
					count: prevState.count - 1
				};
			});
		}
	}, {
		key: 'onResetClick',
		value: function onResetClick() {
			this.setState(function () {
				return {
					count: 0
				};
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					null,
					'Count: ',
					this.state.count
				),
				React.createElement(
					'button',
					{ onClick: this.onAddClick },
					'+1'
				),
				React.createElement(
					'button',
					{ onClick: this.onSubstractClick },
					'-1'
				),
				React.createElement(
					'button',
					{ onClick: this.onResetClick },
					'reset'
				)
			);
		}
	}]);

	return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));

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
