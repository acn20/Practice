// ES6 (EcmaScript 6)
class Animal {
	constructor(name) {
		this.name = name;
	}

	eat() {
		console.log('the animal is now eating!');

		this.hasEaten = true; // creates property hasEaten and assigns it true

		this.sleep = function() { // likewise, creates new function and assigns a value
			console.log('now animal is sleeping');
		}
	}

	breathe() {
		console.log('the animal is now breathing!');
	}

	getName() {
		return this.name;
	}
}

class Dog extends Animal {//prin extends clasa Dog mosteneste functiile clasei Animal

}

var myAnimal = new Animal("Rex");
myAnimal.eat();
var name = myAnimal.getName(); // returns "Rex"
var max = new Dog();