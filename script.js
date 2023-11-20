function getComputerChoice() {
  let num = Math.floor(Math.random() * 3) + 1;
  if (num == 1) {
    return "Fire";
  }
  if (num == 2) {
    return "Water";
  }
  if (num == 3) {
    return "Ice";
  }
}

function playRound(playerSelection, computerSelection) {
  console.log("your choice: " + playerSelection);
  console.log("computer choice: " + computerSelection);
  playerChoiceDisplay.innerText = playerSelection;
  computerChoiceDisplay.innerText = computerSelection;
  if (playerSelection == computerSelection) {
    return "draw";
  }
  if (playerSelection == "Fire" && computerSelection == "Ice") {
    return "win";
  }
  if (playerSelection == "Water" && computerSelection == "Fire") {
    return "win";
  }
  if (playerSelection == "Ice" && computerSelection == "Water") {
    return "win";
  }
  return "lose";
}

function game(playerSelection) {
  const result = playRound(playerSelection, getComputerChoice());
  console.log(result);
  resultDisplay.innerText = result;
  if (result === "win") {
    ++playerScore;
    playerScoreDisplay.innerText = playerScore;
  } else if (result === "lose") {
    ++computerScore;
    computerScoreDisplay.innerText = computerScore;
  }
  if (playerScore === 5) {
    end = true;
    winnerDisplay.innerText = "Player Win!";
  }
  if (computerScore === 5) {
    end = true;
    winnerDisplay.innerText = "Computer Win!";
  }
}

function reset() {
  end = false;
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.innerText = 0;
  computerScoreDisplay.innerText = 0;
  winnerDisplay.innerText = "";
  resultDisplay.innerText = "";
  playerChoiceDisplay.innerText = "";
  computerChoiceDisplay.innerText = "";
}

let playerScore = 0,
  computerScore = 0;
let end = false;

const buttonsContainer = document.querySelector(".buttons");

const buttons = buttonsContainer.querySelectorAll("button");

const playerScoreDisplay = document.getElementById("playerScore");

const computerScoreDisplay = document.getElementById("computerScore");

const winnerDisplay = document.getElementById("winner");

const resultDisplay = document.getElementById("result");

const playerChoiceDisplay = document.getElementById("playerChoice");

const computerChoiceDisplay = document.getElementById("computerChoice");

reset();

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (end) {
      reset();
    }
    game(button.id);
  });
});
