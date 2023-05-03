//functions
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
    let lowerCase = playerSelection.toLowerCase();
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
    let computerSelection = getComputerChoice(randomNumber);
    let round_status=playRound(playerSelection,computerSelection);
    console.log(round_status)
    let status_slice=round_status.slice(0,5);
    return status_slice
    }

//main program
let player_score = 0
let computer_score = 0
for (let roundNumber = 0; roundNumber<5; roundNumber++) {
    status_slice=game();
    if (status_slice==="You l") {
        computer_score++
        console.log("Your opponent gains a point")
    }
    else if (status_slice==="You w") {
        player_score++
        console.log("You gain a point")
    } else {
        roundNumber-=1
        console.log("No one gains a point")
    }
}
let result = (player_score<computer_score)
 ? "You lost! Try again?" 
 : "You won! Rematch?"
console.log(result)