function getComputerChoice(randomNumber) {
    switch (randomNumber) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

function playRound(playerSelection,computerSelection) {
    let lowerCase=playerSelection.toLowerCase();
    if (lowerCase==="rock") {
        if (computerSelection==="rock") {
            return "We tie! Rock equals rock";
        } else if (computerSelection==="paper") {
            return "You lose! Paper beats rock";
        } else {
            return "You win! Rock beats scissor"
        }
    }
} 

let randomNumber=Math.floor(Math.random()*3)+1;
let playerSelection = prompt("Pick one: rock, paper or scissors? ");
let computerSelection=getComputerChoice(randomNumber);
