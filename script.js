function capitalize(str) {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
}
  

function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            return "Rock";
            break;
        
        case 1:
            return "Paper";
            break;
        
        case 2:
            return "Scissors";
            break;

        default:
            return "ERROR";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    
    let winner;

    if (playerSelection.toUpperCase()  === computerSelection.toUpperCase()) {
        winner = "tie";
        console.log(`You tied! (${capitalize(playerSelection)} vs ${capitalize(computerSelection)})`);
        return winner;

    } else if ((playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") ||
               (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") ||
               (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER")) {
    
        winner = "player";
        console.log(`You won! (${capitalize(playerSelection)} vs ${capitalize(computerSelection)})`);
        return winner;

    } else if ((computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "SCISSORS") ||
               (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "ROCK") ||
               (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "PAPER")) {

        winner = "computer";
        console.log(`Computer won! (${capitalize(playerSelection)} vs ${capitalize(computerSelection)})`);
        return winner;
    }    
  }