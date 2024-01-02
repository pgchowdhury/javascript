// // **** String is Immutable in JavaScript ****
// // **** we manipulate string with string method like replace. But we can not manipulgta by going to the location ****

// let str = "Prosenjit Ghosh Chowdhury";
// let prosenjit = {
//     name: "Prosenjit Ghosh Chowdhury",
//     age: 45,
//     passion: "making money",
//     };
// console.log(str);
// console.log(str[0]);
// console.log("length", str.length);
// console.log(`My name is ${prosenjit.name}. \nI am ${prosenjit.age} years old. \nMy passion is ${prosenjit.passion}.`); // template literal
// console.log(str.toUpperCase()); // convert to uppercase
// console.log(str.toLowerCase()); // convert to lowercase
// let strWhiteSpace = "           Prosenjit     "; // create string with white space
// console.log(strWhiteSpace.trim()); // remove the whitespace from beginning and end
// console.log(str.slice(10,15)); // slice method slice(start, end)
// let strLove = " love ";
// let strWife = " Sushmi Ghosh Chowdhury";
// console.log(str.concat(strLove).concat(strWife)); // chain concatenation with concat method which can be done with + operator in string
// console.log(str.replace("Prosenjit", "Raja")); // replace method to replace a value in string
// console.log(str.replaceAll("o", "S")); // replace all 
// console.log(str.charAt(4)); // srearch the character with character index

// Create user name from full name
let fullName = "Prosenjit Ghosh Chowdhury" // We can take the use imput from prompt too
let userName = `@${fullName.toLowerCase().replaceAll(" ", "").concat(fullName.length)}`; // user name should be like @prosenjitghoshchowdhury25
console.log(userName);
