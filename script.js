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
  if ((playerSelection == "rock" && computerSelection == "Scissors") ||
  (playerSelection == "paper" && computerSelection == "Rock") ||
  (playerSelection == "scissors" && computerSelection == "Paper")) {
    return "You Win!";
  } else if ((playerSelection == "rock" && computerSelection == "Paper") ||
    (playerSelection == "paper" && computerSelection == "Scissors") ||
    (playerSelection == "scissors" && computerSelection == "Rock")) {
    return "You Lose!";
  } else {
    return "Draw!";
  } 
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playerSelection, computerSelection);
console.log(playRound(playerSelection, computerSelection));