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

function playRound(playerSelection, computerSelection) {
    let lowerCase = playerSelection.toLowerCase();
    const declaration = document.createElement('div');
    if (lowerCase==="rock") {
        if (computerSelection==="rock") {
            declaration.textContent = "We tie! Rock equals rock";
            container.appendChild(declaration);
            return 2;
        } else if (computerSelection==="paper") {
            declaration.textContent = "You lose! Paper beats rock";
            container.appendChild(declaration);
            return 0;
        } else {
            declaration.textContent = "You win! Rock beats scissors";
            container.appendChild(declaration);
            return 1;
        }
    } else if (lowerCase==="paper") {
        if (computerSelection==="paper") {
            declaration.textContent = "We tie! Paper equals paper";
            container.appendChild(declaration);
            return 2;
        } else if (computerSelection==="scissors") {
            declaration.textContent = "You lose! Scissors beats paper";
            container.appendChild(declaration);
            return 0;
        } else {
            declaration.textContent = "You win! Paper beats rock";
            container.appendChild(declaration);
            return 1;
        }
    } else {
        if (computerSelection==="scissors") {
            declaration.textContent = "We tie! Scissors equals scissors";
            container.appendChild(declaration);
            return 2;
        } else if (computerSelection==="rock") {
            declaration.textContent = "You lose! Rock beats scissors";
            container.appendChild(declaration);
            return 0;
        } else {
            declaration.textContent = "You win! Scissors beats paper";
            container.appendChild(declaration);
            return 1;
        }
    }
} 

function result(playerScore, computerScore) {
    let result = "";
    if (playerScore<computerScore) {
        result = "You lost! Try again?";
    } else if (computerScore<playerScore) {
        result = "You won! Rematch?";
    } else {
        result = "Draw";
    }
    const winner = document.createElement('div');
    winner.textContent = `${result}`;
    return winner;
}

function game(playerSelection, playerScore, computerScore, container) {
    let randomNumber = Math.floor(Math.random()*3)+1;
    let computerSelection = getComputerChoice(randomNumber);
    let winningNumber = playRound(playerSelection, computerSelection, container);
    const point = document.createElement('div');
    if (winningNumber===0) {
        ++computerScore;
        point.textContent = "Your opponent gains a point\n";
    }
    else if (winningNumber===1) {
        ++playerScore;
        point.textContent = "You gain a point\n";
    } else {
        point.textContent = "No one gains a point\n";
    }
    container.appendChild(point)
    let winner = result(playerScore, computerScore);
    return winner;
}

//main program
let playerScore = 0;
let computerScore = 0;
const playerDisplay = document.createElement('div');
const computerDisplay = document.createElement('div');
const container = document.querySelector('.container');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    while ((playerScore !== 5) || (computerScore !== 5)) {
        button.addEventListener('click', function () {
            let playerSelection = button.getAttribute('id');
            let pointCounter = game(playerSelection, playerScore, computerScore, container);
            if (pointCounter == "You lost! Try again?") {
                ++computerScore;
            } else if (pointCounter == "You won! Rematch?") {
                ++playerScore;
            } 
            playerDisplay.textContent(`Player score: ${playerScore}`);
            computerDisplay.textContent(`Computer score: ${computerScore}\n`);
            });
    }
    container.appendChild(winner)
});