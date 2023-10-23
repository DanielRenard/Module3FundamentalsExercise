//1. What are the results of these expressions? (answer first, then use console.log()
// to check)

// console.log("" + 1 + 0) //10
// console.log("" - 1 + 0) //-1
// console.log(true + false) //1
// console.log(!true) //false
// console.log(6/ "3") //2
// console.log("2" * "3") //6
// console.log(4 + 5 + "px") //9px
// console.log("$" + 4 + 5) //$45
// console.log("4" - 2) //2
// console.log("4px" - 2) //NaN
// console.log("  -9  " + 5) //  -9  5
// console.log("  -9  " - 5) //-14
// console.log(null + 1) //1
// console.log(undefined + 1) //NaN
// console.log(undefined == null) //true
// console.log(undefined === null) //false
// console.log(" \t \n" - 2) //-2

//2. Which of the below are not giving the right answer? Why are they not correct? 
//How can we fix them?

// let three = "3"
// let four = "4"
// let thirty = "30"

// let three = 3
// let four = 4
// let thirty = 30

// let addition = three + four
// console.log(addition) //prints as 34 but is actually 7; 
// //removing quotes around strings makes them numbers and prints as 7

// let multiplication = three * four
// console.log(multiplication) //12

// let division = three / four
// console.log(division) //0.75

// let subtraction = three - four
// console.log(subtraction) //-1

// let lessThan1 = three < four
// console.log(lessThan1) //true

// let lessThan2 = thirty < four
// console.log(lessThan2) // prints as true but is actually false; 
// //removing quotes around strings makes them numbers and prints as false

//3. Which of the following console.log messages will print? Why?

// if (0) console.log('#1 zero is true') //0 has zero value

// if ("0") console.log('2 zero is true')//prints as 2 zero is true;
// //non-empty string

// if (null) console.log('null is true') //null has no value

// if (-1) console.log('negative is true')//negative is true;
// //non-zero number

// if (1) console.log('positive is true')//positive is true;
// //non-zero number

//4. Rewrite this if using the ternary/conditional operator '?'. 
//Test it with different values for a and b. What does the ‘+=’ do?

// let a = 2, b = 3;
// let result = `${a} + ${b} is `;

// if (a + b < 10) {
//     result += 'less than 10';
// } else {
//     result += 'greater than 10';
// }

// console.log(result) //2 + 3 is less than 10

// let a = 9, b = 5;
// let result = `${a} + ${b} is `;

// console.log(a+b<10 ? result += 'less than 10': result += 'greater than 10') //9 + 5 is greater than 10

//The addition assignment (+=) operator performs addition (which is either numeric addition
// or string concatenation) on the two operands and assigns the result to the left operand.

//5. Rewrite the following function using: a) function expression syntax, and b) arrow function
//syntax. Test each version to make sure they work the same.

// function getGreeting(name) {
//     return 'Hello' + name +  '!';
//     }

// console.log( getGreeting (" John") )

// const getGreeting = function (name) {
//     return 'Hello' + name + '!';
// }

// console.log( getGreeting (" John") )

// const getGreeting = (name) => {return 'Hello' + name + '!'}

// console.log( getGreeting (" John") )

//6. 

// // a)Complete the inigo object by adding a lastName property 
//and including it in the greeting.

// const westley = {
//     name: 'Westley',
//     numFingers: 5
// }
// const rugen = {
//     name: 'Count Rugen',
//     numFingers: 6
// }
// const inigo = {
//     firstName: 'Inigo',
//     lastName: 'Montoya',
//     greeting(person) {
//         let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}.`;
//         console.log(greeting + this.getCatchPhrase(person));
//     },
//     getCatchPhrase(person) {
//         return ' Nice to meet you.';
//     }
// }

// inigo.greeting(westley)
// inigo.greeting(rugen)

// //b) Complete getCatchPhrase so that if the person argument has 
//6 fingers, it instead prints his famous catch phrase to the console. 
//HINT: see https://www.imdb.com/title/tt0093779/characters/nm0001597.

// const westley = {
//     name: 'Westley',
//     numFingers: 5
// }
// const rugen = {
//     name: 'Count Rugen',
//     numFingers: 6
// }
// const inigo = {
//     firstName: 'Inigo',
//     lastName: 'Montoya',
//     greeting(person) {
//         let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}.`;
//         console.log(greeting + this.getCatchPhrase(person));
//     },
//     getCatchPhrase(person) {
//         if (person.numFingers >= 6) {
//             return ' You killed my father. Prepare to die.';
//         } else {
//         return ' Nice to meet you.';
//             }
//     }
// }

// inigo.greeting(westley)
// inigo.greeting(rugen)

// //c) Update getCatchPhrase to use arrow function syntax and a conditional operator.
// const westley = {
//     name: 'Westley',
//     numFingers: 5
// }
// const rugen = {
//     name: 'Count Rugen',
//     numFingers: 6
// }
// const inigo = {
//     firstName: 'Inigo',
//     lastName: 'Montoya',
//     greeting(person) {
//         let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}.`;
//         console.log(greeting + this.getCatchPhrase(person));
//     },
//     getCatchPhrase: (person) => (person.numFingers >= 6 ) ? ' You killed my father. Prepare to die.' : ' Nice to meet you.',
// }

// inigo.greeting(westley)
// inigo.greeting(rugen)

// //7)The following object represents a basketball game and keeps track of the score as the game progresses.
// //a) Modify each of the methods so that they can be ‘chained’ together and the last line of the example code works

// const basketballGame = {
//     score: 9,
//     freeThrow() {
//         this.score ++;
//         return this;
//     },
//     basket() {
//         this.score += 2;
//         return this;
//     },
//     threePointer() {
//         this.score += 3;
//         return this;
//     },
//     halfTime() {
//         console.log('Halftime score is ' +this.score);
//     }
// }

// //modify each of the above object methods to enable function chaining as below:

//     basketballGame
//     .basket()
//     .freeThrow()
//     .freeThrow()
//     .basket()
//     .threePointer()
//     .halfTime();

// // b) Add a new method to print the full time final score

// const basketballGame = {
//     score: 12,
//     freeThrow() {
//         this.score ++;
//         return this;
//     },
//     basket() {
//         this.score += 2;
//         return this;
//     },
//     threePointer() {
//         this.score += 3;
//         return this;
//     },
//     halfTime() {
//         console.log('Halftime score is ' +this.score);
//         return this;
//     },
//     finalTime() {
//         console.log('Final score is ' +this.score);
//     }
// }

    // basketballGame
    // .basket()
    // .freeThrow()
    // .freeThrow()
    // .basket()
    // .threePointer()
    // .halfTime()
    // .finalTime();

// // c) Add a new object property to keep track of the number of fouls and a method to increment it, 
//similar but separate to the score. Include the foul count in the half time and full time console messages

// const basketballGame = {
//     score: 87,
//     fouls: 7,
//     freeThrow() {
//         this.score ++;
//         return this;
//     },
//     numFouls() {
//         this.fouls++;
//         return this;
//     },
//     basket() {
//         this.score += 2;
//         return this;
//     },
//     threePointer() {
//         this.score += 3;
//         return this;
//     },
//     halfTime() {
//         console.log('Halftime score is ' + this.score +  ' number of fouls ' + this.fouls);
//         return this;
//     },
//     finalTime() {
//         console.log('Final score is ' + this.score);
//     }
// }

//     basketballGame
//     .basket()
//     .freeThrow()
//     .freeThrow()
//     .basket()
//     .threePointer()
//     .halfTime()
//     .numFouls()
//     .finalTime();

// // d) Test your object by chaining all the method calls together in different combinations.

// const basketballGame = {
//     score: 87,
//     fouls: 7,
//     freeThrow() {
//         this.score ++;
//         return this;
//     },
//     numFouls() {
//         this.fouls++;
//         return this;
//     },
//     basket() {
//         this.score += 2;
//         return this;
//     },
//     threePointer() {
//         this.score += 3;
//         return this;
//     },
//     halfTime() {
//         console.log('Halftime score is ' + this.score +  ' number of fouls ' + this.fouls);
//         return this;
//     },
//     finalTime() {
//         console.log('Final score is ' + this.score +  ' number of fouls ' + this.fouls);
//     }
// }

//     basketballGame
//     .basket()
//     .freeThrow()
//     .freeThrow()
//     .basket()
//     .threePointer()
//     .halfTime()
//     .numFouls()
//     .finalTime()

// //8. The object below represents a single city.

// const sydney = {
//     name: 'Sydney',
//     population: 5_121_000,
//     state: 'NSW',
//     founded: '26 January 1788',
//     timezone: 'Australia/Sydney'
//     }

// //a) Write a function that takes an object as an argument and uses a for...in loop to access
// //and print to the console each of those object properties and their values. Test it using
// //the sydney object below.

// let txt = "";
// for (let x in sydney) {
//     txt += sydney[x] + " ";
// }
// console.log(txt)

// //b) Create a new object for a different city with different properties and call your function
// //again with the new object.

// const lafayette = {
//     name: 'Lafayette',
//     population: 121_374,
//     state: 'Louisina',
//     founded: '1821',
//     timezone: "CST"
//     }

// let txt = "";
// for (let x in lafayette) {
//     txt += lafayette[x] + " ";
// }

// console.log(txt)

//9. Use the following variables to understand how JavaScript stores objects by reference.
//a) Create a new moreSports variable equal to teamSports and add some new sport
//values to it (using push and unshift)

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };
// let moreSports = teamSports
// moreSports.push('Basketball', 'Baseball')
// moreSports.unshift('Handball', 'Football')

// console.log(moreSports) //returns 
// //[
// //     'Handball',
// //     'Football',
// //     'Hockey',
// //     'Cricket',
// //     'Volleyball',
// //     'Basketball',
// //     'Baseball'
// //   ]

// //b) Create a new dog2 variable equal to dog1 and give it a new value

let dog2 = dog1
dog2 = "Spot"

// console.log(dog2) //returns Spot
// console.log(dog1) //Returns Bingo

// //c) Create a new cat2 variable equal to cat1 and change its name property

// let cat2 = cat1
// cat2.name = "Bob"

// console.log(cat2) //returns { breed: 'Siberian', name: 'Bob' }

// //d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
// //changed? Why?

// console.log(teamSports) //returns 
// [
//     'Handball',
//     'Football',
//     'Hockey',
//     'Cricket',
//     'Volleyball',
//     'Basketball',
//     'Baseball'
//   ]

// console.log(dog1) //returns Bingo
// console.log(cat1) //returns { breed: 'Siberian', name: 'Bob' }

// //Objects are stored and copied by reference, whereas primitive values: strings, numbers,
// //booleans, etc., are always copied as a whole value. A variable assigned to an object
// //stores not the object itself, but its address in memory, in other words a reference to it.

// //I think teamSports and cat1, both objects, changed because they are objects that equal new 
// //ojects which have augmented their references. dog2, a variable, was made to 
// //equal dog1, another variable, then was given its own value immediately after. dog1's value was 
// //was never changed. dog1 and dog2 are string primitives.

// //e) Change the way the moreSports and cat2 variables are created to ensure the
// //originals remain independent

let moreSports = [...teamSports, 'Baseball', 'Basketball', 'Handball', 'Football'];
let cat2 = {...cat1, name: 'Bob' }

console.log(moreSports) //returns:
// [
//    'Hockey',
//     'Cricket',
//     'Volleyball',
//     'Baseball',
//     'Basketball',
//     'Handball',
//     'Football'
//   ]
console.log(cat2) //returns: { name: 'Bob', breed: 'Siberian' }

console.log(cat1)
console.log(teamSports)

//10. The following constructor function creates a new Person object with the given name and
//age values.
//a) Create a new person using the constructor function and store it in a variable
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.human = true;
//     }
//b) Create a second person using different name and age values and store it in a separate
//variable
//c) Print out the properties of each person object to the console
//d) Rewrite the constructor function as a class called PersonClass and use it to create a
//third person using different name and age values. Print it to the console as well.
//e) Add a canDrive method to both the constructor function and the class that returns true
//if the person is old enough to drive.