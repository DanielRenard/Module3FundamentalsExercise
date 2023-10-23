//9. Use the following variables to understand how JavaScript stores objects by reference.
//a) Create a new moreSports variable equal to teamSports and add some new sport
//values to it (using push and unshift)

// let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
// let dog1 = 'Bingo';
// let cat1 = { name: 'Fluffy', breed: 'Siberian' };
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

// let dog2 = dog1
// dog2 = "Spot"

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

// let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
// let dog1 = 'Bingo';
// let cat1 = { name: 'Fluffy', breed: 'Siberian' };
// let moreSports = [...teamSports, 'Baseball', 'Basketball', 'Handball', 'Football'];
// let cat2 = {...cat1, name: 'Bob' }

// console.log(moreSports) //returns:
// // [
// //    'Hockey',
// //     'Cricket',
// //     'Volleyball',
// //     'Baseball',
// //     'Basketball',
// //     'Handball',
// //     'Football'
// //   ]
// console.log(teamSports) // returns: [ 'Hockey', 'Cricket', 'Volleyball' ]
// console.log(cat2) //returns: { name: 'Bob', breed: 'Siberian' }
// console.log(cat1) //returns: { name: 'Fluffy', breed: 'Siberian' }
