'use strict';

/*
const square = function (x) {
	return x * x;
}



const squareArrow = (x) => x * x;


console.log(squareArrow(10));
*/

var name = 'Mike Doe';

var getFirstName = function getFirstName(fullName) {
	return fullName.split(' ')[0];
};

console.log(getFirstName(name));
