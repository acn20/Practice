// creating objects with functions
function animal(name, age, weight, makeSound) {
	this.name = name;
	this.age = age;
	this.weight = weight;

	this.makeSound = makeSound;
}

function bark() {
	console.log('bark!');
}

var dog = new animal('Nero', 10, 40, bark);

function meow() {
	console.log('Meow!');
}

var cat = new animal('Tom', 3, 15, meow);
cat.makeSound = bark;

//sa nu mai stergi, le vreau doar pe cele folosite
//deci asta se face cu function, nu cu json, cu parola si cu userul
//pai da dar la json trebuie petru catel si pisica sa scrii de fiecare data toate proprietatile

function credentials(username, password) {
	this.username = username;
	this.password = password;
}

var cred = new credentials(readUsername(), readPassword());

function readUsername() {
	// function that reads the username from the screen and returns it
	// ex

	return 'never.free.69';
}

function readPassword() {
	// function that reads the password from the screen and returns it
	// ex

	return '123456';
}