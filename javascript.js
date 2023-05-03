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
            return "You win! Rock beats scissors";
        }
    } else if (lowerCase==="paper") {
        if (computerSelection==="paper") {
            return "We tie! Paper equals paper";
        } else if (computerSelection==="scissors") {
            return "You lose! Scissors beats paper";
        } else {
            return "You win! Paper beats rock";
        }
    } else {
        if (computerSelection==="scissors") {
            return "We tie! Scissors equals scissors";
        } else if (computerSelection==="rock") {
            return "You lose! Rock beats scissors";
        } else {
            return "You win! Scissors beats paper"
        }
    }
} 

function game() {
    let randomNumber=Math.floor(Math.random()*3)+1;
    let playerSelection = prompt("Pick one: rock, paper or scissors? ");
    let computerSelection=getComputerChoice(randomNumber);
    let round_status=playRound(playerSelection,computerSelection);
    let round_status_slice=round_status.slice(0,5);
    console.log(round_status_slice);
}
game();
