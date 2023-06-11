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
    const declaration = document.createElement('div');
    if (lowerCase==="rock") {
        if (computerSelection==="rock") {
            declaration.textContent = "We tie! Rock equals rock";
            return 2;
        } else if (computerSelection==="paper") {
            declaration.textContent = "You lose! Paper beats rock";
            return 0;
        } else {
            declaration.textContent = "You win! Rock beats scissors";
            return 1;
        }
    } else if (lowerCase==="paper") {
        if (computerSelection==="paper") {
            declaration.textContent = "We tie! Paper equals paper";
            return 2;
        } else if (computerSelection==="scissors") {
            declaration.textContent = "You lose! Scissors beats paper";
            return 0;
        } else {
            declaration.textContent = "You win! Paper beats rock";
            return 1;
        }
    } else {
        if (computerSelection==="scissors") {
            declaration.textContent = "We tie! Scissors equals scissors";
            return 2;
        } else if (computerSelection==="rock") {
            declaration.textContent = "You lose! Rock beats scissors";
            return 0;
        } else {
            declaration.textContent = "You win! Scissors beats paper";
            return 1;
        }
    }
} 

function game(e) {
    const button = e.target;
    let randomNumber = Math.floor(Math.random()*3)+1;
    let playerSelection = button.getAttribute('id');
    console.log(playerSelection);
    let computerSelection = getComputerChoice(randomNumber);
    let winningNumber=playRound(playerSelection,computerSelection);
    return winningNumber;
}

//main program
let player_score = 0;
let computer_score = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', game);
});

winningNumber=game();
const point = document.createElement('div');
if (winningNumber===0) {
    computer_score++
    point.textContent ="Your opponent gains a point\n";
}
else if (winningNumber===1) {
    player_score++
    point.textContent ="You gain a point\n";
} else {
    point.textContent ="No one gains a point\n"
}

let result = (player_score<computer_score)
 ? "You lost! Try again?" 
 : "You won! Rematch?"
winner.textContent = `${result}`