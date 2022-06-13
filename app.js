// get all components from html
const square1 = document.getElementById("sq1")
const square2 = document.getElementById("sq2")
const square3 = document.getElementById("sq3")
const square4 = document.getElementById("sq4")
const square5 = document.getElementById("sq5")
const square6 = document.getElementById("sq6")
const square7 = document.getElementById("sq7")
const square8 = document.getElementById("sq8")
const square9 = document.getElementById("sq9")

const resetButton = document.getElementById("resetButton")
const allBoxes = document.querySelectorAll(".box")
let num = 0
// let choice = true;
let board = document.querySelector("#board");
let playerOneTurn = document.getElementById("playerOne")
let playerTwoTurn = document.getElementById("playerTwo")


//variable to mark/toggle the squares with either an "X" or "O"
const mark = (sq) => {
    if (num % 2 === 0) {
        sq.innerText = "X";
        playerOneTurn.innerHTML = `<td id="playerOne">Your Turn</td>`;
        playerTwoTurn.innerHTML = `<td id="playerOne"></td>`
        // console.log(playerOneTurn.innerText);
        // playerOneTurn.classList.remove("hide")
        // playerTwoTurn.classList.add("hide")
    } else if (num % 2 === 1){
        sq.innerText = "O";
        playerTwoTurn.innerHTML = `<td id="playerOne">Your Turn</td>`;
        playerOneTurn.innerHTML = `<td id="playerOne"></td>`
        // playerTwoTurn.innerHTML = "Your Turn";
        // playerTwoTurn.classList.remove("hide")
        // playerOneTurn.classList.add("hide")
    }
    num++;
    winner();
}

// let selectedSq;
//make only the board clickable
board.onclick = function (event) {
    let targetSq = event.target;
    if (targetSq.className != "box" || targetSq.innerText != "") {
        return;
    }
    mark(targetSq);
};

// //Player Turn Function
// function playerOneFuncTurn() {
//     playerOneTurn.innerHTML = "Your Turn";
// }

// alert delay Function and
// winning and tie conditions
const winner = () => {
    if (square1.innerText != "" && square1.innerText === square2.innerText && square1.innerText === square3.innerText) {
        if (square1.innerText === "X") {
            setTimeout(() => { alert("Player 1 Wins") }, 500);
            gameOver();
            // console.log("Player 1 Wins")
        } else {
            setTimeout(() => { alert("Player 2 Wins") }, 500);
            gameOver();
            // console.log("Player 2 Wins")

        }
    } else if (square4.innerText != "" && square4.innerText === square5.innerText && square4.innerText === square6.innerText) {
        if (square4.innerText === "X") {
            setTimeout(() => { alert("Player 1 Wins!👍🏾") }, 500);
            gameOver();
        } else {
            setTimeout(() => { alert("Player 2 Wins!👍🏾") }, 500);
            gameOver();
        }
    } else if (square7.innerText != "" && square7.innerText === square8.innerText && square7.innerText === square9.innerText) {
        if (square7.innerText === "X") {
            setTimeout(() => { alert("Player 1 Wins!👍🏾") }, 500);
            gameOver();
        } else {
            setTimeout(() => { alert("Player 2 Wins!👍🏾") }, 500);
            gameOver();
        }
    } else if (square1.innerText != "" && square1.innerText === square4.innerText && square1.innerText === square7.innerText) {
        if (square1.innerText === "X") {
            setTimeout(() => { alert("Player 1 Wins!👍🏾") }, 500);
            gameOver();
        } else {
            setTimeout(() => { alert("Player 2 Wins!👍🏾") }, 500);
            gameOver();
        }
    } else if (square2.innerText != "" && square2.innerText === square5.innerText && square2.innerText === square8.innerText) {
        if (square2.innerText === "X") {
            setTimeout(() => { alert("Player 1 Wins!👍🏾") }, 100);
            gameOver();
        } else {
            setTimeout(() => { alert("Player 2 Wins!👍🏾") }, 100);
            gameOver();
        }
    } else if (square1.innerText != "" && square1.innerText === square5.innerText && square1.innerText === square9.innerText) {
        if (square1.innerText === "X") {
            setTimeout(() => { alert("Player 1 Wins!👍🏾") }, 500);
            gameOver();
        } else {
            setTimeout(() => { alert("Player 2 Wins!👍🏾") }, 500);
            gameOver();
        }
    } else if (square3.innerText != "" && square3.innerText === square5.innerText && square3.innerText === square7.innerText) {
        if (square3.innerText === "X") {
            setTimeout(() => { alert("Player 1 Wins!👍🏾") }, 500);
            gameOver();
        } else {
            setTimeout(() => { alert("Player 2 Wins!👍🏾") }, 500);
            gameOver();
        }
    } else if (square3.innerText != "" && square3.innerText === square6.innerText && square3.innerText === square9.innerText) {
        if (square3.innerText === "X") {
            setTimeout(() => { alert("Player 1 Wins!👍🏾") }, 500);
            gameOver();
        } else {
            setTimeout(() => { alert("Player 2 Wins!👍🏾") }, 500);
            gameOver();
        }
    } else if (square1.innerText != "" && square2.innerText != "" && square3.innerText != "" && square4.innerText != "" && square5.innerText != "" && square6.innerText != "" && square7.innerText != "" && square8.innerText != "" && square9.innerText != "") {
        setTimeout(() => { alert("It's a tie, No one wins 😔") }, 500);
        gameOver();
    }
}

//make the game stop if won
function gameOver() {
    board.onclick = "";
    // allBoxes.innerText = "";
}
const resetButtonFunc = () => {
    // allBoxes.innerText = " "
    console.log("test again")
    square1.innerText = " "
    square2.innerText = " "
    square3.innerText = " "
    square4.innerText = " "
    square5.innerText = " "
    square6.innerText = " "
    square7.innerText = " "
    square8.innerText = " "
    square9.innerText = " "
}

resetButton.addEventListener('click', resetButtonFunc)