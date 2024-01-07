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
let computer = document.querySelector('.computer-score');
let player = document.querySelector('.player-score')


// Add eventlisteners to buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', game);
})

// Play a round with the user's selection and display the results of the round
function game(ev) {
    // Get the computer's choice and display an icon
    computerChoice = getComputerChoice();
    computerIcon = document.querySelector('.computer-icon')
    if (computerChoice === 'rock') {
        computerIcon.innerText = '✊';
    }
    else if (computerChoice === 'paper') {
        computerIcon.innerText = '✋';
    }
    else {
        computerIcon.innerText = '✌';
    }

    // Get the player's choice and display an icon
    playerChoice = ev.srcElement.className;
    playerIcon = document.querySelector('.player-icon')
    if (playerChoice === 'rock') {
        playerIcon.innerText = '✊';
    }
    else if (playerChoice === 'paper') {
        playerIcon.innerText = '✋';
    }
    else {
        playerIcon.innerText = '✌';
    }

    // Play the round and display the result
    let roundResult = playRound(playerChoice, computerChoice);
    if (roundResult === 'tie') {
        result.innerText = 'It\'s a tie';

    }
    else if (roundResult === 'win') {
        result.innerText = 'You win!';
        playerScore++;
        player.innerText = playerScore;

    }
    else {
        result.innerText = 'You lose';
        computerScore++;
        computer.innerText = computerScore;

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