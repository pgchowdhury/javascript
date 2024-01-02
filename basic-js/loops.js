// Different loops - For, While, Do...while, For...in, For...of

// // For Loop
// for (let i=0; i<=100; i++) {
//     if (i % 2 === 0){ // even number
//         console.log(i);
//     }
// }

// // guess correct number
// let gameNumber = Math.ceil(Math.random() * 10);
// //console.log(gameNumber);
// let userGuessNumber = Number(prompt("Gusess the number between 1 to 10")); 
// while (gameNumber !== userGuessNumber){
//     userGuessNumber = Number(prompt("You guessed wrong number! Please Gusess the number again between 1 to 10")); 
// }
// console.log("You guessed right number!!!", gameNumber);

// // calculate sum 1 to n
// let sum = 0;
// for (let i=1; i<=100; i++){
//     sum = sum + i;
// }
// console.log(sum);


// // // While Loop
// let j = 1;
// while (j < 4) {
//     console.log('While', j);
//     j++;
// }

// // do while loop
// let k = 1
// do {
//     console.log('do while', k);
//     k++;
// } while(k <= 4);


// // for-of loop - helps on String and Arrays
// let str = "Prosenjit";
// for (let i of str){ // iterator
//     console.log(i);
// }


// // for-in loop - help in object and arrays
// let student = { // creating the student object
//     fname: 'Prosenjit',
//     age: 45,
//     phone: 4376610463
// }
// for (let key in student){
//     console.log(key, student[key]);
// }
