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

function compChoice() {
    let choices = ["r", "p", "s", "l", "sp"];
    let randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}
console.log(compChoice());
function game(userChoice) {
    
}

