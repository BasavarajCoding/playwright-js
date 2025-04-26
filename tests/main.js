import student from "./student.js" // Use import statement with default export

const Student = new student ("Alice", 21, "S1234")

// Call a method from the parent class
Student.greet();

// Call a method from the child class
Student.study();