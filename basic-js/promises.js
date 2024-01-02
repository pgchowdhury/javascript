/*
*   Promises:
*   Promise is for "eventual" completion of task. It's an object in JS. 
*   It's solution to a callback hell.
*   let promise = new Promise((resolve, reject) => {....}) //Function with 2 handlers
*   **resolve & reject are callbacks provided by JS
*/

// let promise = new Promise((resoleve, reject)=>{
//     console.log("I'm a promise");
//     reject("Error");
// });
// /* 
// *   A JavaScript Promise Object can be:
// *    * Pending: The result is undefined
// *    * Resolved: The result is a value (fulfilled)  resolve(result)
// *    * Rejected: The result is an error object  reject(error)     
// */
// function getData(dataId, getNewData){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(dataId){
//                 console.log("data", dataId);
//                 resolve("success");
//             } else{
//                 console.log("No Data Errror");
//                 reject("Error");
//             }            
//             if(getNewData){
//                 getNewData();
//             }
//         }, 5000)
//     })
// }

// /*
// *   PROMISES
// *   .then() & .catch()
// *   promise.then((res)=>{...})
// *   promise.catch((err)=>{...})
// */
// let promise = getData();

// promise.then((res)=>{
//     console.log("Promise fullfilles", res);
// });

// promise.catch((err)=>{
//     console.log("rejected", err);
// });

/*
*   Promise Chaining:
*/
function asyncFunc1() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        }, 5000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
        }, 5000);
    });
}

// console.log("fetching data1....");
// asyncFunc1().then((res)=>{
//     console.log("fetching data2...");
//     asyncFunc2().then((res)=>{});
// });

/*
*   Promise Chain for getsData function
*/
function getsData(dataId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(dataId){
                console.log("data", dataId);
                resolve("success");
            } else{
                console.log("No Data Errror");
                reject("Error");
            } 
        }, 5000)
    })
}

// let p1 = getsData(5);
// p1.then((res)=>{
//     console.log(res);
//     p2 = getsData(4);
//     p2.then(res);
// });
// getsData(5).then((res)=>{
//     console.log(res);
//     getsData(4).then((res)=>{
//         console.log(res);
//         getsData(3);
//     });
// });
/*
*   Actual Promise Chain
*/

getsData(5).then((res)=> {
    return getsData(4);
}).then((res)=>{
    return getsData(3);    
}).then((res)=>{
    console.log(res);
})