/*
*   Async-Await:
*   async function always returns a promise.
*   async function myFunc(){....}
*   await pauses the execution of it's surrounding async function until the promise is settled.
*/
function api() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
}

async function getWeatherData(){
    await api(); // 1st call
    await api(); // 2nd call
}

function getData(dataID) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(dataID){
                console.log(dataID);
                resolve(200);
            } else{
                console.log("No Data Error");
                reject(500);
            }

        }, 2000);
    });
}

async function getAyncData(){
    await getData(4);
    await getData(3);
    await getData(2);
}

/*
*   IIFE - Immediately Invoked Function Expression - with IIFE we don't need to call the function
*          rather function execute then and there
*   (function (){ //---})();  // 1st type
*   (() => { //..})();        // 2nd type
*   (async ()=>{ //..await ..})(); // 3rd type    
*/
(async ()=>{
    await getData(4) // 1st call
    await getData(3) // 2nd call
    await getData(2) // 3rd call
    await getData(1) //4th call
})();
