/**
 * @author: Prosenjit Ghosh Chowdhury
 * @since: 23-Dec-2023
 */

let boxes = document.querySelectorAll(".box"); // accessing all buttons with class .box
let resetbtn = document.querySelector("#reset-btn") // accessing the reset button
let newGameBtn = document.querySelector("#new-game-btn") // accessing the new game button
let msgContainer = document.querySelector(".msg-container") // accessing the message container
let winpara = document.querySelector("#msg"); // accessing the winner para

let turn0 = true; // playerX and player0
let count = 0; // to get the button click count

let winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

// console.log(boxes);

const resetGame = () => {
    turn0 = true;
    count = 0;
    enableBoxes();
    winpara.innerHTML = ``;
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {    
    box.addEventListener("click", () => {
        // console.log("box was clicked");
        if(turn0){
            box.innerText = "X";
            turn0 = false;
        } else{
            box.innerText = "O";
            turn0 = true;
        }
        count++;
        console.log(count);
        box.disabled = true;
        if (count === 9){
            console.log("showing draw");
            showDraw();
        } else {
            
            checkWinner();
        }
        

    });
});

const diableBoxes = () => { // function to disabled all the boxes once found the winner
    for (box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => { // function to enabled all the boxes once found the winner
    for (box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => { // Function to show the winner
    winpara.innerHTML = `<b>Congratulations - Winner is ${winner}</b>`
    msgContainer.classList.remove("hide");
    diableBoxes();
};

const showDraw = () => { // Function to show the winner
    winpara.innerHTML = `<b>This is a Draw!!</b>`
    msgContainer.classList.remove("hide");
    diableBoxes();
};

const checkWinner = () => { // function to check the winner with winning pattern
    for (let pattern of winPattern){
        let position0val = boxes[pattern[0]].innerText; // get the position value
        let position1val = boxes[pattern[1]].innerText; // get the position value
        let position2val = boxes[pattern[2]].innerText; // get the position value

        if (position0val != "" && position1val != "" && position2val != ""){
            if (position0val === position1val && position1val === position2val) {
                console.log("winner", position0val);
                
                showWinner(position0val);
            }
        }
    }
};

resetbtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);