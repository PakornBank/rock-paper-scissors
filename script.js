function getComputerChoice() {
  let num = Math.floor(Math.random() * 3) + 1;
  if (num == 1) {
    return "Rock";
  }
  if (num == 2) {
    return "Paper";
  }
  if (num == 3) {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();
  let computer = computerSelection.toLowerCase();
  console.log("your choice: " + player);
  console.log("computer chice: " + computer);
  if (player.toLowerCase() == computer) {
    return "draw";
  }
  if (player == "rock" && computer == "scissors") {
    return "win";
  }
  if (player == "paper" && computer == "rock") {
    return "win";
  }
  if (player == "scissors" && computer == "paper") {
    return "win";
  }
  return "lose";
}

function game() {
  for (let i = 0; i < 3; ++i) {
    let playerSelection = prompt("Rock, Paper, Scissors");
    console.log(playRound(playerSelection, getComputerChoice()));
  }
}
