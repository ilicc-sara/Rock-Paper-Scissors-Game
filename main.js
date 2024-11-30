"use strict";
import "./style.css";

const startGame = document.querySelector(".start-btn");
const overlay = document.querySelector(".overlay");
const winner = document.querySelector(".winner");
const playerScoreEl = document.querySelector(".player-score");
const computerScoreEl = document.querySelector(".computer-score");
const infoText = document.querySelector(".text");
const images = document.querySelectorAll("img");

let playerScore = 0;
let computerScore = 0;

let playerChioce;
let computerChoice;

const maxScore = 3;
const choices = ["rock", "paper", "scissors"];

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

const play = function () {
  if (
    (playerChioce === "rock" && computerChoice === "scissors") ||
    (playerChioce === "paper" && computerChoice === "rock") ||
    (playerChioce === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    infoText.textContent = `Computer choice is ${computerChoice.toUpperCase()}!`;
  }
  if (
    (playerChioce === "rock" && computerChoice === "paper") ||
    (playerChioce === "paper" && computerChoice === "scissors") ||
    (playerChioce === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    infoText.textContent = `Computer choice is ${computerChoice.toUpperCase()}!`;
  }
};

images.forEach(function (el, i) {
  el.addEventListener("click", function (e) {
    playerChioce = e.target.dataset.choice;
    console.log(playerChioce);

    computerChoice = choices[Math.trunc(Math.random() * choices.length)];
    console.log(computerChoice);

    if (playerChioce === computerChoice) {
      infoText.textContent = `You both choose ${computerChoice.toUpperCase()}!`;
    }

    play();

    if (playerScore === maxScore || computerScore === maxScore) {
      if (playerScore === maxScore) {
        winner.textContent = "You won the game!";
        winner.style.color = "green";
      } else {
        winner.textContent = "You lost the game!";
        winner.style.color = "red";
      }
      toggleOverlay();
      winner.classList.remove("hidden");
      startGame.textContent = "TRY AGAIN";

      infoText.textContent = "First who reaches score of three wins the game!";
      playerScore = 0;
      computerScore = 0;
      playerScoreEl.textContent = 0;
      computerScoreEl.textContent = 0;
    }
  });
});
