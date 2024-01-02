// Hour
// If hour is between 6AM and 12PM: Good Morning
// If it is between 12PM and 6PM: Good Afternoon
// Otherwise: Good Evening

let hour = 20;
if (hour >= 6 && hour < 12) {
    console.log('Good Morning');
}
else if (hour >= 12 && hour < 18) {
    console.log('Good Afternoon');
}
else {
    console.log('Good Evening');
}

// Ternury Operator - condition ? statement1 : statement2
let age = 18;
let result = age >= 18 ? 'can vote' : 'can not vote'; // ternary operator is compact if-else
console.log('result is -', result);

// Sample code
let userInput = Number(prompt("Enter a number"));
let multipleOf5 = userInput % 5 === 0 ? 'Multiple of 5' : 'Not Multiple of 5';
console.log(multipleOf5);