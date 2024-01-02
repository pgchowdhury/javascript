/*
*   @author: Prosenjit Ghosh Chowdhury
*   @since: 26-Dec-2023
*/
 let userScore = 0;
 let compScore = 0;

 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");
 const userScoreTxt = document.querySelector("#user-score");
 const compScoreTxt = document.querySelector("#comp-score");

 choices.forEach((choice)=>{
    //console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        //console.log(userChoice,"choice was clicked");
        playGame(userChoice);
    });
 });

 const drawGame = () => {
    msg.innerText = "Game was Draw ! Play again...";
    msg.style.backgroundColor = "#081b31";
 }
 

 const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++ // User Score Increases
        userScoreTxt.innerText = userScore; // updating the user score
    } else {
        msg.innerText = `You Lost ! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++ // Computer Score Inceases
        compScoreTxt.innerText = compScore; // updating the computer score
    }
 };


 const playGame = (userChoice) => {
    //console.log("user choice", userChoice);
    // Generate computer choice
    const compChoice = generateCompChoice();
    //console.log("computer choice", compChoice);

    if (userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock"){
            // computer choose "paper" or "scissors"
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // computer choose scissors or rock
            userWin = compChoice === "scissors" ? false : true;
        } else { // users choose scissors
            // computer choose rock or paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
 };

 const generateCompChoice = () => {
    // rock, paper, scissors
    let options = ['rock', 'paper', 'scissors'];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
 };