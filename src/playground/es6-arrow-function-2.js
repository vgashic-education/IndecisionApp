// arguments object - no longer bound

const add = function (a, b) {
	console.log(arguments);
	return a + b;
};

const addArrow = (a, b) => {
	//console.log(arguments);
	return a + b;
};

/*
console.log(add(55, 1, 1001));
console.log(addArrow(55, 1, 1001));
*/

// this - no longer bound
const user = {
	name: 'Gasha',
	cities: ['Sarajevo', 'Beograd'],
	printPlacesLived: function () {
		const self = this;

		this.cities.forEach(function (city) {
			console.log(`${self.name} has lived in ${city}`);
		});
	}
};

user.printPlacesLived();