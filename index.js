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

const getGreeting = (name) => {return 'Hello' + name + '!'}

console.log( getGreeting (" John") )