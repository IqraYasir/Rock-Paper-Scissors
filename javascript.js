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
            declaration.appendChild(container);
            return 2;
        } else if (computerSelection==="paper") {
            declaration.textContent = "You lose! Paper beats rock";
            declaration.appendChild(container);
            return 0;
        } else {
            declaration.textContent = "You win! Rock beats scissors";
            declaration.appendChild(container);
            return 1;
        }
    } else if (lowerCase==="paper") {
        if (computerSelection==="paper") {
            declaration.textContent = "We tie! Paper equals paper";
            declaration.appendChild(container);
            return 2;
        } else if (computerSelection==="scissors") {
            declaration.textContent = "You lose! Scissors beats paper";
            declaration.appendChild(container);
            return 0;
        } else {
            declaration.textContent = "You win! Paper beats rock";
            declaration.appendChild(container);
            return 1;
        }
    } else {
        if (computerSelection==="scissors") {
            declaration.textContent = "We tie! Scissors equals scissors";
            declaration.appendChild(container);
            return 2;
        } else if (computerSelection==="rock") {
            declaration.textContent = "You lose! Rock beats scissors";
            declaration.appendChild(container);
            return 0;
        } else {
            declaration.textContent = "You win! Scissors beats paper";
            declaration.appendChild(container);
            return 1;
        }
    }
} 

function game(playerSelection) {
    let randomNumber = Math.floor(Math.random()*3)+1;
    console.log(playerSelection)
    let computerSelection = getComputerChoice(randomNumber);
    let winningNumber=playRound(playerSelection,computerSelection);
}

//main program
let playerScore = 0;
let computerScore = 0;
const container = document.querySelector('.container');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click' function (e) {
    const playerSelection = e.target.getAttribute('id');
    game(playerSelection);
    });
};
 
console.log(playerSelection)
const point = document.createElement('div');
if (winningNumber===0) {
    ++computerScore;
    point.textContent ="Your opponent gains a point\n";
}
else if (winningNumber===1) {
    ++playerScore;
    point.textContent ="You gain a point\n";
} else {
    point.textContent ="No one gains a point\n";
}
point.appendChild(container)

let result = (playerScore<computerScore)
 ? "You lost! Try again?" 
 : "You won! Rematch?"
winner.textContent = `${result}`