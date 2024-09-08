const choices = ["rock", "paper", "scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";
  if (playerChoice === computerChoice) {
    result = "it's a tie";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissor" ? "You win" : "you loose";
        break;

      case "paper":
        result = computerChoice === "rock" ? "You win" : "you loose";
        break;

      case "scissorsr":
        result = computerChoice === "paper" ? "You win" : "you loose";
        break;
    }
  }

  playerDisplay.textContent = `PLAYER:${playerChoice}`;
  computerDisplay.textContent = `COMPUTER:${computerChoice}`;
  resultDisplay.textContent = result;
}
