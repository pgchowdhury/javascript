/*
*   @author: Prosenjit Ghosh Chowdhury
*/

/* 
*   Fetch API
*   The Fetch API provides an interface for fetching (sending/receiving) resources.
*   It uses Request and Response objects. The fetch method is used to fetch a resource(data).
*   let promice = fetch(url, [options])
*/

const URL = "https://cat-fact.herokuapp.com/facts";
const factDiv = document.querySelector(".factDiv");
const btnGetFact = document.querySelector("#getFact");

/*
*   Understanding Terms:
*   AJAX: is Asynchronous JS and XML
*   JSON: JavaScript Object Notation
*   json() method: returns a second promise that resolves with the result of parsing the response
*                  body text as JSON. (input is JSON, output is JS object)
*/

// using async-await to fectch JSON via API and convert to JS object
const getFacts = async ()=>{
    console.log("Getting data....");
    let response = await fetch(URL);
    console.log(response); // JSON format
    //console.log(response.status);
    let data = await response.json();
    console.log(data);
    //factPara.innerText = data[0].text;
    for (obj of data) {
        console.log(obj.text);
        let para = document.createElement("p");
        para.innerText = obj.text;
        factDiv.append(para);
    }
};

// // // done via promice chaining
// function getFacts(){
//     //const getFact = fetch(URL);
//     fetch(URL).then((res)=>{
//         return res.json();
//     }).then((data)=>{
//             console.log(data);
//             for (obj of data){
//                 let para = document.createElement("p");
//                 para.innerText = obj.text;
//                 factDiv.append(para);
//             }
//     });
// }


btnGetFact.addEventListener("click", getFacts);

/*
*   HOMEWORK TASK: send POST Request
*   fetch(URL, [Options]) // Options can have method like Post
*/