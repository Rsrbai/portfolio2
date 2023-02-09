//Taken from love Maths and adapted to my needs
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
    displayUserImages(userChoice);
    displayCompImages(compChoice); 
    if (userChoice === compChoice) {
        resultTie();
    } else if (userChoice === "r") {
        if (compChoice === "s") {
            actionMessageR();
            increaseScore();
        } else if (compChoice === "l") {
            actionMessageR();
            increaseScore();
        } else {
            resultLossR();
            increaseCompScore();
        }
    } else if (userChoice === "p") {
        if (compChoice === "r") {
            actionMessageP();
            increaseScore();
        } else if (compChoice === "sp") {
            actionMessageP();
            increaseScore();
        } else {
            resultLossP();
            increaseCompScore();
        }
    } else if (userChoice === "s") {
        if (compChoice === "p") {
            actionMessageS();
            increaseScore();
        } else if (compChoice === "l") {
            actionMessageS();
            increaseScore();
        } else {
            resultLossS();
            increaseCompScore();
        }
    } else if (userChoice === "l") {
        if (compChoice === "sp") {
            actionMessageL();
            increaseScore();
        } else if (compChoice === "p") {
            actionMessageL();
            increaseScore();
        } else {
            resultLossL();
            increaseCompScore();
        }
    } else if (userChoice === "sp") {
        if (compChoice === "r") {
            actionMessageSp();
            increaseScore();
        } else if (compChoice === "s") {
            actionMessageSp();
            increaseScore();
        } else {
            resultLossSp();
            increaseCompScore();
        }
    }
}
/**
 * Function to increase the score count of the user
 */
function increaseScore() {
    let oldScore = parseInt(document.getElementById("user-score").innerText);
    document.getElementById("user-score").innerText = ++oldScore;
}
/**
 * Function to increase the score count of the computer
 */
function increaseCompScore() {
    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;
}
/**
 * Functions to show the action message informing of their pick and winning
 */
function actionMessageR() {
    document.getElementById("resultPara").innerText = "User Wins!!";
    document.getElementById("action-message").innerText = "You picked Rock and won!";
}
function actionMessageP() {
    document.getElementById("resultPara").innerText = "User Wins!!";
    document.getElementById("action-message").innerText = "You picked Paper and won!";
}
function actionMessageS() {
    document.getElementById("resultPara").innerText = "User Wins!!";
    document.getElementById("action-message").innerText = "You picked Scissors and won!";
}
function actionMessageL() {
    document.getElementById("resultPara").innerText = "User Wins!!";
    document.getElementById("action-message").innerText = "You picked Lizard and won!";
}
function actionMessageSp() {
    document.getElementById("resultPara").innerText = "User Wins!!";
    document.getElementById("action-message").innerText = "You picked Spock and won!";
}
/**
 * Function to show the result message informing its a Tie
 */
function resultTie() {
    document.getElementById("resultPara").innerText = "It's a tie!";
    document.getElementById("action-message").innerText = "You and the computer both picked the same option!";
}
/**
 * Functions that shows the computer has won
 */
function resultLossR() {
    document.getElementById("resultPara").innerText = "Computer Wins!!";
    document.getElementById("action-message").innerText = "You picked Rock and lost!";
}
function resultLossP() {
    document.getElementById("resultPara").innerText = "Computer Wins!!";
    document.getElementById("action-message").innerText = "You picked Paper and lost!";
}
function resultLossS() {
    document.getElementById("resultPara").innerText = "Computer Wins!!";
    document.getElementById("action-message").innerText = "You picked Scissors and lost!";
}
function resultLossL() {
    document.getElementById("resultPara").innerText = "Computer Wins!!";
    document.getElementById("action-message").innerText = "You picked Lizard and lost!";
}
function resultLossSp() {
    document.getElementById("resultPara").innerText = "Computer Wins!!";
    document.getElementById("action-message").innerText = "You picked Spock and lost!";
}

/**
 * Functions to display images that represents the user
 * and computers choices
 */

function displayUserImages(userChoice) {
    if (userChoice === "p") {
        document.getElementById("user-image").innerHTML = `<img aria-label="Picture of a hand in a shape representing Paper" id ="user-image" alt="Game image" src="assets/images/paper.png">
                                                            <span class="display-choices" id="display-choice-u">You picked Paper!</span>`;
    } else if (userChoice === "r") {
        document.getElementById("user-image").innerHTML = `<img aria-label="Picture of a hand in a shape representing a rock" id ="user-image" alt="Game image" src="assets/images/rock.png">
                                                            <span class="display-choices" id="display-choice-u">You picked Rock!</span>`;
    } else if (userChoice === "s") {
        document.getElementById("user-image").innerHTML = `<img aria-label="Picture of a hand in a shape representing Scissors" id ="user-image" alt="Game image" src="assets/images/scissors.png">
                                                            <span class="display-choices" id="display-choice-u">You picked Scissors!</span>`;
    } else if (userChoice === "l") {
        document.getElementById("user-image").innerHTML = `<img aria-label="Picture of a hand in a shape representing Lizard" id ="user-image" alt="Game image" src="assets/images/lizard.png">
                                                            <span class="display-choices" id="display-choice-u">You picked Lizard!</span>`;
    } else if (userChoice === "sp") {
        document.getElementById("user-image").innerHTML = `<img aria-label="Picture of a hand in a shape representing Spock" id ="user-image" alt="Game image" src="assets/images/spock.png">
                                                            <span class="display-choices" id="display-choice-u">You picked Spock!</span>`;
    }
}

function displayCompImages(compChoice) {
    if (compChoice === "p") {
        document.getElementById("computer-image").innerHTML = `<img aria-label="Picture of a hand in a shape representing Paper" id ="computer-image" alt="Game image" src="assets/images/paper.png">
                                                            <span class="display-choices" id="display-choice-c">Comp picked Paper!</span>`;
    } else if (compChoice === "r") {
        document.getElementById("computer-image").innerHTML = `<img aria-label="Picture of a hand in a shape representing a rock" id ="computer-image" alt="Game image" src="assets/images/rock.png">
                                                            <span class="display-choices" id="display-choice-c">Comp picked Rock!</span>`;
    } else if (compChoice === "s") {
        document.getElementById("computer-image").innerHTML = `<img aria-label="Picture of a hand in a shape representing Scissors" id ="computer-image" alt="Game image" src="assets/images/scissors.png">
                                                            <span class="display-choices" id="display-choice-c">Comp picked Scissors!</span>`;
    } else if (compChoice === "l") {
        document.getElementById("computer-image").innerHTML = `<img aria-label="Picture of a hand in a shape representing Lizard" id ="computer-image" alt="Game image" src="assets/images/lizard.png">
                                                            <span class="display-choices" id="display-choice-c">Comp picked Lizard!</span>`;
    } else if (compChoice === "sp") {
        document.getElementById("computer-image").innerHTML = `<img aria-label="Picture of a hand in a shape representing Spock" id ="computer-image" alt="Game image" src="assets/images/spock.png">
                                                            <span class="display-choices" id="display-choice-c">Comp picked Spock!</span>`;
    }
}