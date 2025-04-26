import Person from "./person.js";

class student extends Person{
    constructor(name, age, studentId){
        super(name,age);  // Call the constructor of the parent class
        this.studentId=studentId;
    }

    study(){
        console.log(this.name+" is studying. Student ID "+this.studentId)
    }
}
export default student;