// In JavaScript, a class acts as a blueprint for creating objects with shared properties and methods.

class Person 
{                                                               // Class name should start with a capital letter by convention.

    age = 25;  // Direct property declaration with a default value.

    // Getter method for location - allows access to a computed value like a property.
    get location() 
    {
        return 'canada';                                                        // Returns the location when accessed as a property.
    }

    // Constructor method - called by default when a new instance of the class is created.
    constructor(firstName, lastName) 
    {
        this.firstName = firstName;  // Initializes instance property with provided first name.
        this.lastName = lastName;    // Initializes instance property with provided last name.
    }

    // Method to return the full name of the person.
    fullName() 
    {
        return this.firstName + ' ' + this.lastName;                  // Concatenates first and last name.
    }
}

// Creating instances (objects) of the Person class with specific names.
let person1 = new Person('John', 'smith');
let person2 = new Person('Thomas', 'shelby');

// Accessing the properties and methods of the person1 object.
console.log(person1.age);          // Outputs the age property, default: 25
console.log(person1.location);     // Outputs the location via getter, result: 'canada'
console.log(person1.fullName());   // Calls fullName method, result: 'John smith'

// Accessing the fullName method of the person2 object.
console.log(person2.fullName());   // Calls fullName method, result: 'Thomas shelby'


export default Person; // used for exporting the Person class.
