// let button = document.getElementById("myId"); // Select by ID
// console.dir(button);

// let headings = document.getElementsByClassName("myClass"); // select by class name - return HTML collection
// console.dir(headings);
// console.log(headings);

// let paras = document.getElementsByTagName("p"); // select by tag name - return HTML collection
// console.log(paras);

// let element = document.querySelector("p"); // query selector automatically detects - id, class name, tag name - return the 1st element
// console.log(element);

// let elements = document.querySelectorAll("p"); // query selector automatically detects - id/class name/tag name - return all all elements as Node List
// console.log(elements);

// // ** DOM Manipulation ** - tagName, innerText, innerHTML, textContent
// // tagName - returns tag for elements node
// console.log(element.tagName);
// // innerText - returns text content of the element and all it's children
// console.log(document.querySelector("div").innerText);
// // innerHTML - returns the plain text or HTML content in the element
// console.log(element.innerHTML);
// // textContent - retunrs textual content even for hidden elements
// console.log(document.querySelector("div").textContent);

// console.log(document.body.firstElementChild); // print first child of the body;

// document.querySelector("#heading").innerText = "Hello Prosenjit!! How are you"; // I can change the text also

// Let's Practice 
// Qs. Create a H2 heading element with text - "Hello Java Script". Append "from Apna College Students" to this text using JS
let heading = document.querySelector("#heading1");
heading.innerText = heading.innerText + " from Apna College Students";

// Qs. Create 3 divs with common class name - "box". Access them & add some unique text to each of them.
let divs = document.querySelectorAll(".box");
for(key in divs){
    divs[key].innerText = `Prosenjit ${key}`;
}