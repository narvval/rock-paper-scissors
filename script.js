// Randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’ as the "computer's choice".
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

// Play a single round of Rock Paper Scissors.
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
    button.addEventListener('click', game);
})

// Play a round with the user's selection and display the results of the round
function game(ev) {
    let roundResult = playRound(ev.srcElement.className, getComputerChoice());
    if (roundResult === 'tie') {
        result.innerText = 'Tie';
        console.log(`Tie. playerScore is ${playerScore}, computerScore is ${computerScore}`);

    }
    else if (roundResult === 'win') {
        result.innerText = 'Win';
        playerScore++;
        player.innerText = playerScore;
        console.log(`Player wins. playerScore is ${playerScore}, computerScore is ${computerScore}`);

    }
    else {
        result.innerText = 'Lose';
        computerScore++;
        computer.innerText = computerScore;
        console.log(`Player loses. playerScore is ${playerScore}, computerScore is ${computerScore}`);

    }
    declareWinner();

}

// Declare the winner and stop the game once one of the players reaches 5 pts
function declareWinner() {
    if (playerScore === 5) {
        // Display the results
        alert('You win!');

        //Remove event listeners
        buttons.forEach((button) => {
            button.removeEventListener('click', game);
        })

        return '5';
    }
    else if (computerScore === 5) {
        // Display the results
        alert('You lose.');

        //Remove event listeners
        buttons.forEach((button) => {
            button.removeEventListener('click', game);
        })

        return'5';
    }    
}