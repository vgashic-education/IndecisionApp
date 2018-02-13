var nameVar = 'gasha';
//var nameVar = 'bla';

console.log('nameVar', nameVar);


let nameLet = 'Jen';
nameLet = 'Jon';
console.log('nameLet', nameLet);


const nameConst = 'const';
console.log('nameConst', nameConst);


// block scoping

var fullName = 'Jon Snow';

if (fullName) {
	var firstName = fullName.split(' ')[0];
	console.log(firstName);
}

console.log(firstName);