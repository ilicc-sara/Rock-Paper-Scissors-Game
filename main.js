"use strict";
import "./style.css";

const startGame = document.querySelector(".start-btn");
const overlay = document.querySelector(".overlay");
const winner = document.querySelector(".winner");
const playerScoreEl = document.querySelector(".player-score");
const computerScoreEl = document.querySelector(".computer-score");
const infoText = document.querySelector(".text");
const infoText1 = document.querySelector(".text-1");
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

  const resetPlayerScore = () => (playerScore = 0);
  const resetCompScore = () => (compScore = 0);
  // prettier-ignore
  return {getPlayerChoice, setPlayerChoice, setCompChoice, getCompChoice, getCompScore, getPlayerScore, incrCompScore, incrPlayerScore, resetPlayerScore, resetCompScore };
};

const game = gameCreator();

const uiControlerCreator = function () {
  const displayPlayerScore = (value) => (playerScoreEl.textContent = value);
  const displayCompScore = (value) => (computerScoreEl.textContent = value);

  const displayInfo = (value) =>
    (infoText.textContent = `Computer choice is ${value.toUpperCase()} !`);

  const displayScore = (value) =>
    (infoText1.textContent = `${value} got the score !`);

  const displayWinner = () => {
    toggleOverlay();
    winner.classList.remove("hidden");
    startGame.textContent = "TRY AGAIN!";
  };

  // prettier-ignore
  return { displayCompScore, displayPlayerScore, displayInfo, displayScore, displayWinner};
};

const ui = uiControlerCreator();
const updateUI = () => {
  infoText.textContent = "First who reaches score of three wins the game!";
  infoText1.innerHTML = `<span>&nbsp;</span>`;
  ui.displayPlayerScore(game.getPlayerScore());
  ui.displayCompScore(game.getCompScore());
};

const play = function () {
  if (
    // prettier-ignore
    (game.getPlayerChoice() === "rock" && game.getCompChoice() === "scissors") ||
    (game.getPlayerChoice() === "paper" && game.getCompChoice() === "rock") ||
    (game.getPlayerChoice() === "scissors" && game.getCompChoice() === "paper")
  ) {
    game.incrPlayerScore();
    ui.displayPlayerScore(game.getPlayerScore());
    ui.displayInfo(game.getCompChoice());
    ui.displayScore("PLAYER");
  } else if (game.getPlayerChoice() === game.getCompChoice()) {
    ui.displayInfo("the same");
    ui.displayScore("Nobody");
  } else {
    game.incrCompScore();
    ui.displayCompScore(game.getCompScore());
    ui.displayInfo(game.getCompChoice());
    ui.displayScore("COMPUTER");
  }
};

images.forEach(function (el, i) {
  el.addEventListener("click", function (e) {
    game.setPlayerChoice(e.target.dataset.choice);
    game.setCompChoice();
    play();

    // if (game.getPlayerScore() === maxScore) {
    //   ui.displayWinner();
    //   winner.textContent = "You won the game!";
    //   winner.style.color = "green";
    //   game.resetPlayerScore();
    //   game.resetCompScore();
    //   updateUI();
    // }
    // if (game.getCompScore() === maxScore) {
    //   ui.displayWinner();
    //   winner.textContent = "You lost the game!";
    //   winner.style.color = "red";
    //   game.resetCompScore();
    //   game.resetPlayerScore();
    //   updateUI();
    // }

    if (
      game.getPlayerScore() === maxScore ||
      game.getCompScore() === maxScore
    ) {
      if (game.getPlayerScore() === maxScore) {
        winner.textContent = "You won the game!";
        winner.style.color = "green";
      } else if (game.getCompScore() === maxScore) {
        winner.textContent = "You lost the game!";
        winner.style.color = "red";
      }
      ui.displayWinner();
      game.resetCompScore();
      game.resetPlayerScore();
      updateUI();
    }
  });
});
