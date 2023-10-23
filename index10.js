//10. The following constructor function creates a new Person object with the given name and
//age values.

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    }

//a) Create a new person using the constructor function and store it in a variable

let personA = new Person('Bill', '304')

//b) Create a second person using different name and age values and store it in a separate
//variable

let personB = new Person('Rick', '60')

//c) Print out the properties of each person object to the console

console.log(personA.human)

//d) Rewrite the constructor function as a class called PersonClass and use it to create a
//third person using different name and age values. Print it to the console as well.
//e) Add a canDrive method to both the constructor function and the class that returns true
//if the person is old enough to drive.