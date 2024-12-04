"use strict";
import "./style.css";

const startGame = document.querySelector(".start-btn");
const overlay = document.querySelector(".overlay");
const winner = document.querySelector(".winner");
const playerScoreEl = document.querySelector(".player-score");
const computerScoreEl = document.querySelector(".computer-score");
const infoText = document.querySelector(".text");
const images = document.querySelectorAll("img");

// let playerScore = 0;
// let computerScore = 0;

// let playerChioce;
// let computerChoice;

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

const uiControlerCreator = function () {};

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

images.forEach(function (el, i) {
  el.addEventListener("click", function (e) {
    game.setPlayerChoice(e.target.dataset.choice);
    game.setCompChoice();
    play();
    // playerChioce = gamePlay.setPlayerChoice(e);
    // console.log(game.getPlayerChoice());
    // console.log(game.getCompChoice());

    // game.setCompChoice(compChoice.getChoice())

    // if (gamePlay.setPlayerChoice(e) === gamePlay.getCompChoice()) {
    //   infoText.textContent = `You both choose ${gamePlay
    //     .getCompChoice()
    //     .toUpperCase()}!`;
    // }

    // if (playerScore === maxScore || computerScore === maxScore) {
    //   if (playerScore === maxScore) {
    //     winner.textContent = "You won the game!";
    //     winner.style.color = "green";
    //   } else {
    //     winner.textContent = "You lost the game!";
    //     winner.style.color = "red";
    //   }
    //   toggleOverlay();
    //   winner.classList.remove("hidden");
    //   startGame.textContent = "TRY AGAIN";

    //   infoText.textContent = "First who reaches score of three wins the game!";
    //   playerScore = 0;
    //   computerScore = 0;
    //   playerScoreEl.textContent = 0;
    //   computerScoreEl.textContent = 0;
    // }
  });
});
