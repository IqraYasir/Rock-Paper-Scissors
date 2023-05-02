function getComputerChoice(randomNumber) {
    switch (randomNumber) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
}

let randomNumber=Math.floor(Math.random()*3)+1;
let computerChoice=getComputerChoice(randomNumber);
console.log(computerChoice)