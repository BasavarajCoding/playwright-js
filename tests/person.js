class Person{
    constructor (name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log("Hi, my name is "+this.name+" and my age is "+this.age)
    }
}
export default Person;