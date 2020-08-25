"use strict";
const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

//Using named function expression
const getPlayerChoice = function getPlayerChoice() {
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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const getComputerChoice = function () {
  const randomValue = getRandomInt(1, 4);
  let computerChoice;
  switch (randomValue) {
    case 1:
      computerChoice = ROCK;
      break;
    case 2:
      computerChoice = PAPER;
      break;
    case 3:
      computerChoice = SCISSORS;
      break;
  }
  return computerChoice;
};

const getWinner = (computerChoice, playerChoice) =>
  computerChoice === playerChoice
    ? RESULT_DRAW
    : (computerChoice === ROCK && playerChoice == PAPER) ||
      (computerChoice === PAPER && playerChoice === SCISSORS) ||
      (computerChoice === SCISSORS && playerChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

startGameBtn.addEventListener("click", function startGame() {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  alert("Game is starting...");
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  console.log(
    `Player choice ${playerSelection} \nComputer choice ${computerSelection}`
  );
  const getWin = getWinner(computerSelection, playerSelection);
  console.log(getWin);
});
