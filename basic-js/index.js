console.log('Hello');

let name = 'Prosenjit'; // String literal
let age = 45; // Number literal
let isDone = true; // Boolean literal
let lastName; // Undefined literal - if no value assigned
let myGreeting = null; // null literal - when clear value from a variable

console.log(name, age, isDone, lastName, myGreeting);
//console.log(typeof name, typeof age, typeof isDone, typeof lastName, typeof myGreeting);

let person = { name: 'Jiya', age: 14}; // Object - Person


console.log(person);
person.name = 'Sushmi'; // Change the object attribute
console.log(person['name']);

let selectedColor = ['red', 'blue']; // array
selectedColor[2] = 1
console.log(selectedColor.length);

function greet(fname, lname){ // Function - Performing Greeting
    console.log('Hello ' + fname + ' ' + lname);
}
greet('Sara', 'Ghosh Chowdhury');

// Calculate a value
function square(number) {
    return number * number;
}
console.log(square(2));

//String Primitive - although string primitive but in case of dot(.) operater it wrpas around a String object
const message = 'Hello this is my first message';
// String object
const another = new String('Hi');
console.log('meassage is type of ' + typeof message + ' And another is type of ' + typeof another);
console.log('message length is ' + message.length) // String length
console.log(message[0]); // slicing
console.log('Include method ---- ' + message.includes('my')); // check if any substring is included in the string object
console.log('Starts With method --- ' + message.startsWith('Hello ')); // check if the string is starts with the substring
console.log('IndexOf method --- ' + message.indexOf('my')); // Index of method
console.log('Replace method --- ' + message.replace('first', 'second')); // replce the first substring with second
console.log(message); // it does not inplace modification, Original string did not change
console.log('toUpperCase Method --- ' + message.toUpperCase()); // Change the String to Upper Case
console.log('toLowerCase method --- ' + message.toLowerCase()); // change the string to lower case
myArray = message.split(' '); // Split method with separator - here white space
console.log(myArray); // printing the array in colsole