// // ** Events Handling in JS ** drawback: you can handle with one function only. Multiple function not possible
// // node.event = ()=>{
//     //handle here
// //}
// // ** Event Object **
// // It's a special object that has details about the event. 
// // All event handlers have access to the Event Object's properties and methods.
// // node.event = (e) => { //handle here }
// // e.target, e.type, e.clientX, e.clientY
// // let a = 25;
// let btn = document.querySelector("#btn1"); // got the button node
// btn.onclick = (evt)=>{
//     console.log("Button1 was Clicked !!");
//     let a = 25;
//     a++;
//     console.log(a);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY); // location of the click event
// };

// let box = document.querySelector("#box"); // Got the div box
// box.onmouseover = (evt) => {
//     console.log("You are inside the div!!")
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY); // location of the click event
// };


// // ** Event Listeners ** best one
// // node.addEventListener( event, callback ); node.removeEventListener( event, callback );
// // Note**: the callback reference should be same to remove
// let btn = document.querySelector("#btn1"); // got the button node
// btn.addEventListener("click", (evt)=>{ // adding first listener on the button
//     console.log("Buttone clicked!! - handler1");
// });
// btn.addEventListener("dblclick", (evt)=>{ // adding second listener on the button
//     console.log("Button Double Clicked!! - handler2");
//     console.log(evt.type);
//     console.log(evt.target);
// });
// btn.addEventListener("click", handler3 = (evt)=>{ // giving a callback name for third listener. Need for remove later 
//     console.log("Buttone clicked!! - handler3");
// });
// btn.addEventListener("click", (evt)=>{ // adding first listener on the button
//     console.log("Buttone clicked!! - handler4");
// });
// btn.addEventListener("click", (evt)=>{ // adding first listener on the button
//     console.log("Buttone clicked!! - handler5");
// });

// btn.removeEventListener("click", handler3); // removing event listiner with same callback function


// ** Let's Practice **
// Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again
let modebtn = document.querySelector("#mode");
let currentMode = "light";
modebtn.addEventListener("click", () =>{
    if(currentMode === "light"){
        currentMode = "dark";
        //document.querySelector("body").style.backgroundColor = "black";
        //document.querySelector("body").setAttribute("class", "dark");
        document.querySelector("body").classList.remove("light");
        document.querySelector("body").classList.add("dark");
    } else{
        currentMode = "light";
        //document.querySelector("body").style.backgroundColor = "white";
        //document.querySelector("body").setAttribute("class", "light");
        document.querySelector("body").classList.remove("dark");
        document.querySelector("body").classList.toggle("light");
    }
    console.log(currentMode); 
} );

