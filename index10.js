//10. The following constructor function creates a new Person object with the given name and
//age values.

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.human = true;
// }

//a) Create a new person using the constructor function and store it in a variable

// let dude1 = new Person('Bill', 304)

//b) Create a second person using different name and age values and store it in a separate
//variable

// let dude2 = new Person('Rick', 16)

//c) Print out the properties of each person object to the console

// console.log(dude1)
// console.log(dude2)

//d) Rewrite the constructor function as a class called PersonClass and use it to create a
//third person using different name and age values. Print it to the console as well.

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.human = true
//     }
// }

// let person1 = new Person('Tim', '60')
// console.log(person1)

//e) Add a canDrive method to both the constructor function and the class that returns true
//if the person is old enough to drive.

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.human = true;
//     this.canDrive = () => this.age >= 18;
// }

// let dude1 = new Person('Bill', 304)
// let dude2 = new Person('Rick', 16)

// console.log(dude1.canDrive())

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.human = true
//     }

//     canDrive() {
//         return this.age >= 18;
//     }
// }

// let dude1 = new Person('Bill', 304)
// let dude2 = new Person('Rick', 16)

// console.log(dude2.canDrive())