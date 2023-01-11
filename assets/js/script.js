document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "rock") {
                alert("You picked Rock!");
            } else if (this.getAttribute("data-type") === "paper") {
                alert("You picked Paper!");
            } else if (this.getAttribute("data-type") === "scissors") {
                alert("You picked Scissors!");
            } else if (this.getAttribute("data-type") === "lizard") {
                alert("You picked Lizard!");
            } else if (this.getAttribute("data-type") === "spock") {
                alert("You picked Spock!");
            }
        });
    }
});