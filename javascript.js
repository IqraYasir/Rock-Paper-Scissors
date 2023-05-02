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

let randomNumber=Math.floor(Math.random()*3)+1;
let playerSelection = prompt("Pick one: rock, paper or scissors? ")
let computerSelection=getComputerChoice(randomNumber);
