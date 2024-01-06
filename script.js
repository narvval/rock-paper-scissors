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

    let result = document.querySelector('.result');

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

// Declare the winner and stop the game once one of the players reaches 5 pts
function declareWinner() {
    if (playerScore > 4) {
        // Remove the button eventListeners
    
        // Display the results
        alert('You win!');
    }
    else if (computerScore > 4) {
        // Remove the button eventListeners
    
        // Display the results
        alert('You lose.');
    }    
}

// Add eventListeners to the buttons
let rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    declareWinner();

    let roundResult = playRound('rock', getComputerChoice());
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

});

let paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

let scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});






// Write a NEW function called game(). Use the previous function inside of this one to play a best-of-five game that keeps score and reports a winner or loser at the end.
// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     for (i = 0; i < 5; i++) {
//         let player = prompt("Rock, Paper or Scissors? ").toLowerCase();
//         let computer = getComputerChoice();
//         let result = playRound(player, computer);
//         console.log(result);
//         if (result === "lose") {
//             computerScore++;
//         }
//         else if (result === "win") {
//             playerScore++;
//         }
//         console.log(`Computer has ${computerScore} points, player has ${playerScore} points.`);
//     }

//     if (playerScore === computerScore) {
//         return "It's a tie";
//     }
//     else if (playerScore < computerScore) {
//         return "You lose."
//     }
//     else {
//         return "You win!"
//     }
// }


// console.log(game());

