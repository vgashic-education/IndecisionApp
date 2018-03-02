'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Visibility = function (_React$Component) {
	_inherits(Visibility, _React$Component);

	function Visibility(props) {
		_classCallCheck(this, Visibility);

		var _this = _possibleConstructorReturn(this, (Visibility.__proto__ || Object.getPrototypeOf(Visibility)).call(this, props));

		_this.visibilityToggle = _this.visibilityToggle.bind(_this);

		_this.state = {
			visible: false,
			buttonCaption: 'Show'
		};

		return _this;
	}

	_createClass(Visibility, [{
		key: 'visibilityToggle',
		value: function visibilityToggle(e) {
			this.setState(function (prevState) {
				console.log(prevState.visible);

				return {
					visible: !prevState.visible,
					buttonCaption: !prevState.visible ? 'Hide' : 'Show'
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
					'Visibility app'
				),
				React.createElement(
					'button',
					{ onClick: this.visibilityToggle },
					this.state.buttonCaption
				),
				this.state.visible && React.createElement(
					'article',
					null,
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, expedita incidunt! Voluptatem et nihil rerum molestias! Soluta quidem incidunt quas ducimus aliquam, omnis ea. Fugiat, labore molestiae. Eaque, vel cum.'
				)
			);
		}
	}]);

	return Visibility;
}(React.Component);

ReactDOM.render(React.createElement(Visibility, null), document.getElementById('app'));

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
