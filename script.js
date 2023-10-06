function getComputerChoice() {
    const choices = ['rock','paper','scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();

function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    }
    if (playerSelection === "rock"){
        if (computerSelection === "paper") {
            return "You lose! Paper beats rock."
        }
        else {
            return "You win! Rock beats scissors."
        }
    }
    if (playerSelection === "paper"){
        if (computerSelection === "scissors") {
            return "You lose! Scissors beats paper."
        }
        else {
            return "You win! Paper beats rock."
        }
    }
}

function game() {
    for (i = 0; i<5; i++) {
        let computerSelection = getComputerChoice();
        console.log("Computer chose " + computerSelection);
       console.log(playRound(playerSelection,computerSelection));
    }
}
console.log(game());