'use strict';

// arguments object - no longer bound

var add = function add(a, b) {
	console.log(arguments);
	return a + b;
};

var addArrow = function addArrow(a, b) {
	//console.log(arguments);
	return a + b;
};

/*
console.log(add(55, 1, 1001));
console.log(addArrow(55, 1, 1001));
*/

// this - no longer bound
var user = {
	name: 'Gasha',
	cities: ['Sarajevo', 'Beograd'],
	printPlacesLived: function printPlacesLived() {
		var _this = this;

		var cityMessages = this.cities.map(function (city) {
			return _this.name + ' has lived in ' + city;
		});

		return cityMessages;
	}
};

console.log(user.printPlacesLived());
