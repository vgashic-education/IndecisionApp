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

		this.cities.forEach((city) => {
			console.log(`${this.name} has lived in ${city}`);
		});
	}
};

user.printPlacesLived();