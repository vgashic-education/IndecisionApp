class Person {

	constructor(name = 'Annonymous', age = 0) {
		this.name = name;
		this.age = age;
	}

	getGreeting() {
		return `Hi ${this.name}`;
	}

	getDescription() {
		return `${this.name} is ${this.age} year(s) old!`;
	}

}

const me = new Person('Gasha', 38);

console.log(me.getGreeting(), me.getDescription());
