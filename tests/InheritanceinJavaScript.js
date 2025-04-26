//Inheritance in JavaScript allows one class to inherit characteristics (properties and methods) from another class. 
//The class which inherits properties from another class is called sub class/child class
//the class whose properties are inherited is called super class/parent class
//Rule: Constructor of both parent and child class should be same
//Rule: Always call parent class contructor as first step in child class contructor

//iporting parent class
import Person from './ClassInJavascipt.js';

class Pet extends Person {
  // Override the getter for location
  get location() {
    return "BlueCross";  // This should override any location logic in Person
  }

  constructor(firstName, lastName) {
    super(firstName, lastName);  // Call the parent constructor
  }
}

let pet = new Pet("sam", "san");
console.log(pet.fullName());    // Expected: "sam san"
console.log(pet.location);      // Expected: "BlueCross"