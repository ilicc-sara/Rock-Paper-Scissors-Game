"use strict";
import "./style.css";

const startGame = document.querySelector(".start-btn");
const overlay = document.querySelector(".overlay");
const winner = document.querySelector(".winner");
const playerScoreEl = document.querySelector(".player-score");
const computerScoreEl = document.querySelector(".computer-score");
const infoText = document.querySelector(".text");
const images = document.querySelectorAll("img");

const maxScore = 3;

const toggleOverlay = function () {
  startGame.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

startGame.addEventListener("click", function () {
  toggleOverlay();
  winner.classList.add("hidden");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && !startGame.classList.contains("hidden")) {
    // console.log(startGame.classList);
    toggleOverlay();
    winner.classList.add("hidden");
  }
});

const gameCreator = function () {
  const choices = ["rock", "paper", "scissors"];
  let compChoice = "";
  let playerChioce = "";
  let compScore = 0;
  let playerScore = 0;

  // prettier-ignore
  const setCompChoice = () => (compChoice = choices[Math.trunc(Math.random() * choices.length)]);
  const setPlayerChoice = (value) => (playerChioce = value);
  const getPlayerChoice = () => playerChioce;
  const getCompChoice = () => compChoice;

  const getCompScore = () => compScore;
  const getPlayerScore = () => playerScore;

  const incrCompScore = () => (compScore += 1);
  const incrPlayerScore = () => (playerScore += 1);

  // prettier-ignore
  return {getPlayerChoice, setPlayerChoice, setCompChoice, getCompChoice, getCompScore, getPlayerScore, incrCompScore, incrPlayerScore };
};

const game = gameCreator();
// const ui = uiControlerCreator()

const play = function () {
  game.getPlayerChoice();
  game.getCompChoice();
  if (
    (game.getPlayerChoice() === "rock" &&
      game.getCompChoice() === "scissors") ||
    (game.getPlayerChoice() === "paper" && game.getCompChoice() === "rock") ||
    (game.getPlayerChoice() === "scissors" && game.getCompChoice() === "paper")
  ) {
    game.incrPlayerScore();
    console.log("START");
    console.log("player choice:", game.getPlayerChoice());
    console.log("computer choice:", game.getCompChoice());
    console.log("player score:", game.getPlayerScore());
    console.log("comp score:", game.getCompScore());
    console.log("END");
    // playerScoreEl.textContent = playerScore;
    // infoText.textContent = `Computer choice is ${computerChoice.toUpperCase()}!
    // PLAYER WON`;
  }
  if (
    (game.getPlayerChoice() === "rock" && game.getCompChoice() === "paper") ||
    (game.getPlayerChoice() === "paper" &&
      game.getCompChoice() === "scissors") ||
    (game.getPlayerChoice() === "scissors" && game.getCompChoice() === "rock")
  ) {
    game.incrCompScore();
    console.log("START");
    console.log("player choice:", game.getPlayerChoice());
    console.log("computer choice:", game.getCompChoice());
    console.log("player score:", game.getPlayerScore());
    console.log("comp score:", game.getCompScore());
    console.log("END");
    // computerScoreEl.textContent = computerScore;
    // infoText.textContent = `Computer choice is ${computerChoice.toUpperCase()}!
    // COMPUTER WON`;
  }
  if (game.getPlayerChoice() === game.getCompChoice()) {
    console.log("START");
    console.log("player choice:", game.getPlayerChoice());
    console.log("computer choice:", game.getCompChoice());
    console.log("END");
  }
};
const uiControlerCreator = function () {
  playerScoreEl.textContent = game.getPlayerScore();
  computerScoreEl.textContent = game.getCompScore();
};

images.forEach(function (el, i) {
  el.addEventListener("click", function (e) {
    game.setPlayerChoice(e.target.dataset.choice);
    game.setCompChoice();
    play();
    uiControlerCreator();
  });
});
