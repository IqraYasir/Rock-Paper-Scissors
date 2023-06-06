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
            console.log("We tie! Rock equals rock");
            return 2;
        } else if (computerSelection==="paper") {
            console.log("You lose! Paper beats rock");
            return 0;
        } else {
            console.log("You win! Rock beats scissors");
            return 1;
        }
    } else if (lowerCase==="paper") {
        if (computerSelection==="paper") {
            console.log("We tie! Paper equals paper");
            return 2;
        } else if (computerSelection==="scissors") {
            console.log("You lose! Scissors beats paper");
            return 0;
        } else {
            console.log("You win! Paper beats rock");
            return 1;
        }
    } else {
        if (computerSelection==="scissors") {
            console.log("We tie! Scissors equals scissors");
            return 2;
        } else if (computerSelection==="rock") {
            console.log("You lose! Rock beats scissors");
            return 0;
        } else {
            console.log("You win! Scissors beats paper");
            return 1;
        }
    }
} 

function game() {
    let randomNumber=Math.floor(Math.random()*3)+1;
    let playerSelection = prompt("Pick one: rock, paper or scissors? ");
    let computerSelection = getComputerChoice(randomNumber);
    let winningNumber=playRound(playerSelection,computerSelection);
    return winningNumber;
}

//main program
let player_score = 0
let computer_score = 0

winningNumber=game();
if (winningNumber===0) {
    computer_score++
    console.log("Your opponent gains a point")
}
else if (winningNumber===1) {
    player_score++
    console.log("You gain a point")
} else {
    roundNumber-=1
    console.log("No one gains a point")
}

let result = (player_score<computer_score)
 ? "You lost! Try again?" 
 : "You won! Rematch?"
console.log(result)