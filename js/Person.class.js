'use strict';

class Person {
	
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName
	}
	
}

const people = Array.from(document.querySelectorAll('.js-person')) || null;

people.forEach(person => {
	const { firstname, lastname } = person.dataset;
	const newPerson = new Person(firstname, lastname);
	person.querySelector('.js-firstname').textContent = newPerson.firstName;
	person.querySelector('.js-lastname').textContent = newPerson.lastName;
});