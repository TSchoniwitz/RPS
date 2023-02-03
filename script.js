console.log("Hello World!!");

function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3) + 1;
  if (compChoice === 1) {
    return "Rock";
  } else if (compChoice === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if ((playerSelection === "rock" && computerSelection === "Scissors") ||
  (playerSelection === "paper" && computerSelection === "Rock") ||
  (playerSelection === "scissors" && computerSelection === "Paper")) {
    return result = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if ((playerSelection === "rock" && computerSelection === "Paper") ||
    (playerSelection === "paper" && computerSelection === "Scissors") ||
    (playerSelection === "scissors" && computerSelection === "Rock")) {
    return result = `Computer Wins! ${computerSelection} beats ${playerSelection}`;
  } else {
    return result = "Draw!";
  } 
}

function game() {
  playRound(playerSelection, computerSelection);
  for (let i = 0; i < 5; i++) {
    if (result === `You Win! ${playerSelection} beats ${computerSelection}`) {
      console.log("You gained a point");
    } else if (result === `Computer Wins! ${computerSelection} beats ${playerSelection}`) {
      console.log("Computer gained a point");
    } else {
      console.log("No one gained a point");
    }
  }
}


const playerSelection = prompt("Enter rock/paper/scissors").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playerSelection, computerSelection);
console.log(playRound(playerSelection, computerSelection));
console.log(game());

/*

*/