/*
* @author: Prosenjit Ghosh Chowdhury
*/

/* 
*   Sync in JS:
*   Synchronous: Synchronous means the code runs in a particular of sequence of instructions given 
*   in the program. Each instruction waits for the previous instruction to complete the exection.
*
*   Asynchronous: Due to synchronous programming sometime imp instructions get blocked due to some 
*   previous instructions, which causes a delay in the UI. Asynchronous code execution allows to 
*   execute next instruction immediately and doesn't block the flow.
*/

console.log("one");
console.log("two");
setTimeout(()=>{
    console.log("hello aync after 4 seconds");
}, 4000); // set time out to execute the hello statement after 4 seconds
console.log("three"); // but this "three" statement will not wait for setTimeout code - asnchronous
console.log("four"); // this "fore" statement also will not wait for setTimeout code - asnchronous

/*
*   Callback: A callback is a function passed as an argument to another function
*/

function sum(a, b){
    console.log("callback sum", a+b);
}

function calculator(a, b, sumCallBack) { // callback example
    sumCallBack(a, b);
}
calculator(3, 5, sum);

calculator(3, 5, (a, b) =>{
    console.log("Arrow callback sum", a+b);
});

const hello = ()=>{
    console.log("Hello Callback Async after 5 seconds");
}
setTimeout(hello, 5000); // callback of hello function asynchronously

/*
*   Callback Hell:
*   Nested callback stacked below one another forming a pyramid structure (Pyramid of Doom)
*   This style of programming becomes difficult to understand and manage.
*/
function getData(dataId, getNewData) { // call 
    setTimeout(()=>{
        console.log("data =", dataId);
        if(getNewData){
            getNewData();
        }
        
    }, 2000);
}

getData(5, ()=>{
    getData(4, ()=>{
        getData(3, ()=>{
            getData(2)
        });
    });
});

