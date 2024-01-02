// ** Let's Practice **
// Qs Create a new button element, Give it a text "click me", background color of red and text color of white.
// Insert the button as first element of the body tag
let button = document.createElement("button"); // creating button
button.innerText = "click me!"; // giving it a text
button.style.backgroundColor = "red";
button.style.color = "white";
document.querySelector("body").prepend(button); // Inserting the button as first element of the body tag

// Qs Create a <p> tag in html, give it a class and styling.
// Now create a new class in CSS and try to append this class to the <p> element
// Did you notice how you oevrwrite the class name when you add a new class. Solve this problem using the ClassList.
let para = document.querySelector("#para");
para.classList.add("paraClass");
//console.log(para.getAttribute("class"));