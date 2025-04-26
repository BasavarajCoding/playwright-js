let person = {
    firstName: 'Tim',
    lastName: 'joe',
    age: 18,
    fullName: function() {
       return this.firstName + ' ' + this.lastName // Added space between the first and last name
    }
};

console.log(person.firstName); // Calling
console.log(person['firstName']); // Calling as if it's an array index
person.firstName = 'Tim dane' // Updating firstName
person.gender = 'Male'; // Adding property to the object
console.log(person); // Checking whether property added in object
delete person.age; // Deleting property from the object
console.log(person); // After deletion
console.log(person.fullName()); // Corrected to simply call the function
console.log('age' in person); // Checking if 'age' is a property in person object

//Interview question=> print all the values of all the javascript object
for (let key in person)
{

    console.log(person[key])
}