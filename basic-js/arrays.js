// let marks = [92, 76, 89, 45];
// console.log(marks);
// console.log(`The mark arrays length is ${marks.length}`); // array length as String length
// console.log(typeof marks); // type of array is always object
// console.log(typeof marks[0]); // type of array element
// marks[3] = 99; // changing the array value, Array is mutable
// console.log(marks);
// // loop over array
// console.log("For loop on array...")
// for (let i=0; i < marks.length; i++){
//     console.log(marks[i]);
// }

// // loop over array with while loop
// let w = 0;
// console.log("While loop on array...")
// while (w < marks.length){
//     console.log(marks[w]);
//     w++;
// }

// // For-off loop on array
// for(let mark of marks){
//     console.log(mark);
// }

// // for-in loop on array
// for(let key in marks){
//     console.log(marks[key]);
// }

// // we prefer to use for-of method to loop on array
// let cities = ["Kolkata", "Pune", "Mumbai", "Delhi", "Bnagalore"];
// for (let city of cities){
//     console.log(city.toUpperCase());
// }

// // Practice -1 Lets get the average marks of a student [92, 93, 67, 89, 99]
// let studentMarks = [92, 93, 67, 89, 99];
// let sumMarks = 0;
// for (let mark of studentMarks){
//     sumMarks = sumMarks + mark;
// }
// console.log(`Average mark is ${sumMarks/studentMarks.length}`);

// // Practice 2 - for a given array with price of 5 items --> [250, 645, 300, 900, 50]. All items have an 
// // offer of 10% OFF on them. Change the array to store final price after applying offer
// let itemsPrice = [250, 645, 300, 900, 50];
// let offer = 10;
// for (let key in itemsPrice){
//     itemsPrice[key] = (itemsPrice[key] - (itemsPrice[key]) * (offer/100));
//     console.log(`value of offer is ${itemsPrice[key]}`);
// } 
// console.log(`New price is ${itemsPrice}`);

// // Array Methods - push(), pop(), toString(), concat(), unshift(), shift(), slice(), splice()
// // push() - add to END - changes in the existing array - Can add multiple items
// foodItems = ["Potato", "Mango", "Apple", "Lichi"];
// console.log(`Before Push ${foodItems}`);
// foodItems.push("Guava", "Paneer", "Mutton");
// console.log(`After push ${foodItems}`);
// // unshift() - Add elements in START of the Array - can add multiple items
// console.log(`Before use the unshift the array is ${foodItems}`);
// foodItems.unshift("Brcoli", "Keema");
// console.log(`After use the unshift the array is ${foodItems}`);
// // pop() - delete last item from end - change in the existing array
// foodItems.pop();
// console.log(`After pop the food items are ${foodItems}`);
// // shift() - Remove the items from START
// foodItems.shift();
// console.log(`After using the shift the array is ${foodItems}`);
// // toString() method - convert the array to String - it creates a new string - does not make change to the original array
// foodString = foodItems.toString();
// console.log(`After convering to String ${foodString}`);
// // concat() - joins mutiple array and return results
// let languages = ["Python", "Java", "JavaScript", "Rust", "C++"];
// let mixAfterConcat = foodItems.concat(languages);
// console.log(mixAfterConcat);
// // slice(startidx, endidx) method - give the slice of the array and does not make change to the original array
// let sliceMe = foodItems.slice(1, 4);
// console.log("slice me", sliceMe);
// // splice(startidx, delCount, elementsToAdd...) - change the array in place
// console.log("Before splice foodItems array is", foodItems);
// foodItems.splice(2, 2, "Straberry", "Blueberry");
// console.log("After Splice/Chainge the foodItems array became", foodItems);
// // now just add items in between without deleting it
// foodItems.splice(3, 0, "Blackberry", "Rasberry");  // Adding blackberry and rasberry after blueberry in middle 
// console.log("Aftre add items in between", foodItems);

// Lets Practice - Create an arry to store companies - "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
// 1. Remove the first company from the array
// 2. Remove Uber and add Ola in it's place
// 3. Add Amazon at the end
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift(); // used shift to delete the first company
console.log("Remove the first company from the array", companies); 
companies.splice(1,1,"Ola"); // Used splice to delete Uber, which is Index 1 add Ola in that place
console.log("Remove Uber and add Ola in it's place", companies );
companies.push("Amazon"); // used push the add "Amazon" at the end
console.log("Add Amazon at the end", companies);