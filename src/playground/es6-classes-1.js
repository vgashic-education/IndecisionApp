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


class Student extends Person {

	constructor(name, age, major) {
		super(name, age);
		this.major = major;
	}

	hasMajor() {
		return !!this.major;
	}

	getDescription() {
		let description = super.getDescription();

		if (this.hasMajor()) {
			description += ` Their major is ${this.major}.`
		}

		return description;
	}
}


class Traveler extends Person {

	constructor(name, age, homeLocation) {
		super(name, age);
		this.homeLocation = homeLocation;
	}

	getDescription() {

		let description = `Hi I am ${this.name}.`;

		if (!!this.homeLocation) {
			description += ` I'm visiting from ${this.homeLocation}. `
		}

		return description;
	}

}



const me = new Traveler('Gasha', 38, 'Belgrade');
console.log(me.getDescription());

const other = new Traveler()
console.log(other.getDescription());


