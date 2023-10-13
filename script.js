const div = document.querySelector('div');
const results = document.querySelector('p');

function getComputerChoice() {
    const choices = ['rock','paper','scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(playerSelection,computerSelection) {
    console.log(playerSelection);
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
    if (playerSelection === "scissors"){
        if (computerSelection === "rock") {
            return "You lose! Rock beats scissors."
        }
        else {
            return "You win! Scissors beats paper."
        }
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        const computerSelection = getComputerChoice();
        results.textContent = playRound(playerSelection,computerSelection);
    })
})
