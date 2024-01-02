// *** forEach loop in Arrays *** arr.forEach(callBackFunction) - always use with arrays only
// callBackFunction -> executes each element of the array
// HighOrderFunction/HigherOrderFunction - the function which takes other function as parameter or return a function example forEach() function

// let arr = [1,2,3,4,5,6];
// arr.forEach((val, idx, arr)=>{
//     console.log(val, idx, arr);
// });

// // Practice 1: For a given value of numbers, print the square of each value using the forEach loop
// let nums = [1, 2, 3, 4, 5];
// nums.forEach((val)=>{
//     console.log(val**2);
// });


// // *** Map method - arr.map(callBackFnx(val, index, arr)) - Used to form new Array ***
// // Create a new array with the results of some operation. The value it's call back returns are used to form new array
// let num = [2, 3, 4, 5, 6, 7, 8];
// let sqrArray = num.map((val)=>{
//     return val**2;
// });
// console.log(sqrArray);


// // *** Filter Method - Create a new Array of elements that give true for a condition/filter 
// // Example: all even elements
// let numarr = [2,3,4,5,6,7,8,9,10];
// let evenArr = numarr.filter((val)=>{
//     return val % 2 === 0;
// });
// console.log(evenArr);


// // *** Reduce method - Performs some operations and reduces the array to a single value. It returns the single value. ***
// // example sum, average etc let result = arr.reduce(accumulator, val) =>{ return Operation;}, 0);
// // we will use Reduce when we have lots of value in Input but we need single value in Output
// let numarray = [1,2,3,4];
// let sum = numarray.reduce((accumulator, currentval)=> {
//     return accumulator + currentval;
// }, 0);
// console.log("sum", sum);
// console.log("average", sum/numarray.length);

// // Using Reduce method - find out total price of the items
// const items = [
//     {name: "rice", price: 5},
//     {name: "Book", price: 10},
//     {name: "Fish", price: 15},
//     {name: "Fruit", price: 20}
// ];
// const totalPrice = items.reduce((accumulator, item)=>{
//     return accumulator + item.price;
// }, 0);
// console.log(totalPrice);

// // Using Reduce Group People by Age 
// const people = [
//     {name: "Kally", age: 26},
//     {name: "Sally", age: 42},
//     {name: "John", age: 31},
//     {name: "Jill", age: 42},
// ]; 
// const results = people.reduce((groupedPeople, person)=>{
//     const age = person.age;
//     if (groupedPeople[age] == null) {
//         groupedPeople[age] = [];
//     }
//     groupedPeople[age].push(person.name);      
//     return groupedPeople
// }, {});
// console.log(results)

// // Find the larget value by using reduce
// let arraval = [ 45, 67, 34, 97, 19];
// const largestVal = arraval.reduce((accumulator, val)=>{
//     return (accumulator > val) ? accumulator : val;
// }, 0);
// console.log(largestVal);


// // Practice - 
// // We have given array if marks of Students. Filter out the marks of Student that scored 90+
// let stuMarks = [45, 67, 55, 93, 95, 45, 76, 86, 89, 97, 99, 100];
// const stu90Marks = stuMarks.filter((val)=>{
//     return val>90;
// });
// console.log(stu90Marks);

// // Practice - Take a number n as input from user. Create a array from numebrs 1 to n. Use the reduce method to calculate sum of all number in the array
// // Use the reduce method to calculate the product of all number in the array
// let n = 10; // we could get this number from user's with prompt
// let arr = [];
// for (let i=1; i<=n; i++){ // Create a array from numebrs 1 to n
//     arr.push(i);
// }
// console.log("Array is", arr);
// numSum = arr.reduce((accumulator, currentnum)=>{ // Use the reduce method to calculate sum of all number in the array
//     return accumulator + currentnum;
// }, 0);
// console.log("Sum of Num", numSum);
// productNum = arr.reduce((accumulator, currentnum)=>{
//     return accumulator*currentnum;
// }, 1);
// console.log("Prodcut of num is", productNum)
