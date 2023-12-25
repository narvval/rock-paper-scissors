// begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice() {
    random = Math.floor(Math.random() * 3);    
    switch (random) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

// Define how the function will work (DECLARE)
function playRound(playerSelection, computerSelection) { 
    // - Make sure playerSelection is case insensitive
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    // - Make sure user has entered valid input (i.e., = rock, paper or scissors)
    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        return false;
    }
    else if (computerSelection === playerSelection) {
        return "tie";
    } 
    else if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "scissors" && playerSelection === "paper") || (computerSelection === "paper" && playerSelection === "rock")) {
        return "lose";
    }
    else {
        return "win";
    }
}

// Write a NEW function called game(). Use the previous function inside of this one to play a best-of-five game that keeps score and reports a winner or loser at the end.
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++) {
        let player = prompt("Rock, Paper or Scissors? ").toLowerCase();
        let computer = getComputerChoice();
        let result = playRound(player, computer);
        console.log(result);
        if (result === "lose") {
            computerScore++;
        }
        else if (result == "win") {
            playerScore++;
        }
        console.log(`Computer has ${computerScore} points, player has ${playerScore} points.`);
    }

    if (playerScore === computerScore) {
        return "It's a tie";
    }
    else if (playerScore < computerScore) {
        return "You lose."
    }
    else {
        return "You win!"
    }
}


console.log(game());

