const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select"); //select both the from and to dropdowns
const btn = document.querySelector("form button"); //select form button
const fromCurr = document.querySelector(".from select"); //select the From dropdown
const toCurr = document.querySelector(".to select"); //select the To dropdown
const msg = document.querySelector(".msg"); //select the message to show the conversion

// calling the update exchange rate in loading the page
window.addEventListener("load", ()=>{
    updateExchangeRate();
});

for (select of dropdowns) {
  for (currCode in countryList) {
    let newOptions = document.createElement("option");
    newOptions.value = currCode;
    newOptions.innerText = currCode;
    select.append(newOptions);
    if (select.name==="from" && currCode==="USD"){
        newOptions.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOptions.selected = "selected";
    }
  }
  // Eventlistener to change the flag
  select.addEventListener("change", (evt)=>{
    updateFlag(evt.target);
  });
}

const updateFlag = (element) =>{
    //console.log(element);
    let currCode = element.value;
    let countryCode = countryList[currCode];
    // console.log(currCode, countryCode);
    // console.log(`https://flagsapi.com/${countryCode}/flat/64.png`);
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
    // console.log(element.parentElement);
}

// on click the Get Exchange Rate button
btn.addEventListener("click", (evt)=>{
    evt.preventDefault();
    updateExchangeRate();
    
});

const updateExchangeRate = async ()=>{
    let amount = document.querySelector(".amount input");
    let amountVal = amount.value;
    if (amountVal == "" || amountVal < 1) {
        amountVal = 1;
        amount.value = 1;
    }

    // console.log(fromCurr.value, toCurr.value);
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
    // console.log(URL);
    let response = await fetch(URL);
    let responseJson = await response.json();
    // getting the target currency rate 
    let rate = responseJson[toCurr.value.toLowerCase()] ;
    let finalAmount = rate * amountVal; // getting the final amount after multiply the rate with amount
    finalAmount = finalAmount.toFixed(2); // keeping upto two decimal place
    // console.log(responseJson);
    msg.innerText = `${amountVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}