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