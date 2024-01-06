// begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice() {
    random = Math.floor(Math.random() * 3);    
    switch (random) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Write a function that plays a single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) { 
    if (computerSelection === playerSelection) {
        return 'tie';
    } 
    else if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "scissors" && playerSelection === "paper") || (computerSelection === "paper" && playerSelection === "rock")) {
        return 'lose';
    }
    else {
        return 'win';
    }
}

// Keep track of the score
let playerScore = 0;
let computerScore = 0;
let result = document.querySelector('.result');
let computer = document.querySelector('.computer');
let player = document.querySelector('.player')


// Add eventlisteners to buttons
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        declareWinner();

        let roundResult = playRound(button.className, getComputerChoice());
        if (roundResult === 'tie') {
            result.innerText = 'Tie';
        }
        else if (roundResult === 'win') {
            result.innerText = 'Win';
            player.innerText = playerScore;
            playerScore++;
        }
        else {
            result.innerText = 'Lose';
            computer.innerText = computerScore;
            computerScore++;
        }

    })

})

// Declare the winner and stop the game once one of the players reaches 5 pts
function declareWinner() {
    if (playerScore > 4) {
        // Display the results
        alert('You win!');
    }
    else if (computerScore > 4) {
        // Display the results
        alert('You lose.');
    }    
}

