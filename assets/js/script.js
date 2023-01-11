const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".result");
const rockBtn = document.getElementById("r")
const paperBtn = document.getElementById("p")
const scissorsBtn = document.getElementById("s")
const lizardBtn = document.getElementById("l")
const spockBtn = document.getElementById("sp")

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "rock") {
                alert("You picked Rock!");
                game("r");
            } else if (this.getAttribute("data-type") === "paper") {
                alert("You picked Paper!");
                game("p");
            } else if (this.getAttribute("data-type") === "scissors") {
                alert("You picked Scissors!");
                game("s");
            } else if (this.getAttribute("data-type") === "lizard") {
                alert("You picked Lizard!");
                game("l");
            } else if (this.getAttribute("data-type") === "spock") {
                alert("You picked Spock!");
                game("sp");
            }
        });
    }
});


/**
 * Function to choose a random pick for the computer.
 */
function computerChoice() {
    let choices = ["r", "p", "s", "l", "sp"];
    let randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

/**
 * Function to decide who wins the game by comparing the
 * users choice to the computers choice.
 */

function game(userChoice) {
    let compChoice = computerChoice(); 
    
    if (userChoice === compChoice) {
        console.log("its a tie");
        resultTie();
    } else if (userChoice === "r") {
        if (compChoice === "s") {
            console.log("you win");
            actionMessageR();
            increaseScore();
        } else if (compChoice === "l") {
            console.log("you win");
            actionMessageR();
            increaseScore();
        } else {
            console.log("you lose");
            increaseCompScore();
        }
    } else if (userChoice === "p") {
        if (compChoice === "r") {
            console.log("you win");
            actionMessageP();
            increaseScore();
        } else if (compChoice === "sp") {
            console.log("you win");
            actionMessageP();
            increaseScore();
        } else {
            console.log("you lose");
            increaseCompScore();
        }
    } else if (userChoice === "s") {
        if (compChoice === "p") {
            console.log("you win");
            actionMessageS();
            increaseScore();
        } else if (compChoice === "l") {
            console.log("you win");
            actionMessageS();
            increaseScore();
        } else {
            console.log("you lose");
            increaseCompScore();
        }
    } else if (userChoice === "l") {
        if (compChoice === "sp") {
            console.log("you win");
            actionMessageL();
            increaseScore();
        } else if (compChoice === "p") {
            console.log("you win");
            actionMessageL();
            increaseScore();
        } else {
            console.log("you lose");
            increaseCompScore();
        }
    } else if (userChoice === "sp") {
        if (compChoice === "r") {
            console.log("you win");
            actionMessageSp();
            increaseScore();
        } else if (compChoice === "s") {
            console.log("you win")
            actionMessageSp();
            increaseScore();
        } else {
            console.log("you lose");
            increaseCompScore();
        }
    }
}
/**
 * Function to increase the score count of the user
 */
function increaseScore() {
    let oldScore = parseInt(document.getElementById("user-score").innerText)
    document.getElementById("user-score").innerText = ++oldScore;
}
/**
 * Function to increase the score count of the computer
 */
function increaseCompScore() {
    let oldScore = parseInt(document.getElementById("computer-score").innerText)
    document.getElementById("computer-score").innerText = ++oldScore;
}
/**
 * Action message informing of their pick and winning
 */
function actionMessageR() {
    document.getElementById("resultPara").innerText = "User Wins!!"
    document.getElementById("action-message").innerText = "You picked Rock and won!"
}
function actionMessageP() {
    document.getElementById("resultPara").innerText = "User Wins!!"
    document.getElementById("action-message").innerText = "You picked Paper and won!"
}
function actionMessageS() {
    document.getElementById("resultPara").innerText = "User Wins!!"
    document.getElementById("action-message").innerText = "You picked Scissors and won!"
}
function actionMessageL() {
    document.getElementById("resultPara").innerText = "User Wins!!"
    document.getElementById("action-message").innerText = "You picked Lizard and won!"
}
function actionMessageSp() {
    document.getElementById("resultPara").innerText = "User Wins!!"
    document.getElementById("action-message").innerText = "You picked Spock and won!"
}
/**
 * Result message informing its a Tie
 */
function resultTie() {
    document.getElementById("resultPara").innerText = "It's a tie!"
    document.getElementById("action-message").innerText = "You and the computer both picked the same option!"
}

