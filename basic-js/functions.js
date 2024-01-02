// function myFunction(num, n){ // Prameter - which use at function defination
//     console.log("Apna College");
//     console.log("Learning JS today");
//     console.log(num * n);
// }

// myFunction(5, 4); // Argument which I pass at the time of function call

// function sum(num1, num2) { // Function to return value
//     // num1 & num2 are local variables --> scope
//     let s = num1 + num2;
//     return s;
// }

// let su = sum(4, 5);
// console.log(su);

// //  *** ARROW FUNCTION *** Modern JavaScript
// // Sum function using arrow function
// const sumArrow = (num1, num2)=>{
//     return num1 + num2;
// };
// const mulArrow = (num1, num2)=> {
//     return num1 * num2;
// };
// console.log(sumArrow(7, 11));
// console.log(mulArrow(7, 11));

// // Let's Practice - Create a function unsing the "function" keyword that takes a String as an argument & returns the number of vowels in the String
// let vowels = ['a', 'e', 'i', 'o', 'u'];
// let count = 0;
// function countVowel(str){
//     str = str.toLowerCase();
//     for (let char of str){ // looping through each character of the String
//         count = (char==='a' || char==='e' || char==='i' || char==='o' || char==='u') ? count+1 : count;
//     }
//     console.log("Total vowel count is", count);
// }
// countVowel("ProsenjIt"); // calling teh function to count the vowels

// // Let's use an arrow function to do the same task
// const countVowelArrow = (str)=>{
//     str = str.toLowerCase();
//     for (let char of str){
//         count = (char==='a' || char==='e' || char==='i' || char==='o' || char==='u') ? count+1 : count;
//     }
//     console.log("Total vowel count is", count);
// };
// countVowelArrow("ProsenjIt");




