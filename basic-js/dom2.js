// ** accessing and changing attribuet value **
let div = document.querySelector("#box");
console.log(div.textContent);
let id = div.getAttribute("id"); // getting attribute value from div .getAttribute("<attribute name>")
console.log(id);

let para = document.querySelector(".para"); // accessing the paragraph with the class .para
let paraclass = para.getAttribute("class"); // getting the class attribute value from paragraoph
console.log(paraclass);

para.setAttribute("class", "newpara"); // setting the attribute value - .setAttribute("<attribute name", <new value>)
console.log(para.getAttribute("class"));

// ** accessing the style node.style
console.log(div.style);
div.style.backgroundColor = "red"; // changing the style from java script
div.style.fontSize = "26px"; // changing the style from java script

// ** Create Element and Insert Element **
// Create Element - let el = document.createElement("<Element tag - example div, p>")
// Insert Element at the end of node - node.append(el)
// Insert Element at the start of the node - node.prepend(el)
// Insert Element before the node - node.before(el)
// Insert Element after the node - node.after(el)
let newButton = document.createElement("button"); // Creating the button element
newButton.innerText = "Click Me"; // adding the Button Text
let mydiv = document.querySelector("#box"); // accessing the div
// mydiv.append(newButton); // adding the button end of the div but it's inside the div
// mydiv.prepend(newButton); // adding the button strating the div but it's inside the div
// mydiv.before(newButton); // adding the button before the div but it's outside the div
mydiv.after(newButton); // adding the button after the div but it's outside the div
let newHeading = document.createElement("h2"); // Creating a new heading
newHeading.setAttribute("class", "myClass"); // setting the class attrbute in the heading with JavaScript
newHeading.innerHTML = "<i>This is a dynamic heading from JavaScript</i>" // adding the text in the heading
document.querySelector("body").prepend(newHeading); // adding the heading in top - just after body

// Remove - node.remove() 
newButton.remove() // removing the new button before created by JavaScript



