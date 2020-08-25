const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_CHOICE = ROCK;

let gameIsRunning = false;

const getPLayerChoice = function getPlayerChoice() {
  const selection = prompt(
    `${ROCK}, ${PAPER}, or ${SCISSORS}`,
    DEFAULT_CHOICE
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_CHOICE} for you`);
    return DEFAULT_CHOICE;
  }
  return selection;
};

startGameBtn.addEventListener("click", function startGame() {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  alert("Game is starting...");
  const playerSelection = getPLayerChoice();
  console.log(playerSelection);
});
