"use strict";
import "./style.css";

const startGame = document.querySelector(".start-btn");
const overlay = document.querySelector(".overlay");
const winner = document.querySelector(".winner");

startGame.addEventListener("click", function () {
  startGame.classList.add("hidden");
  overlay.classList.add("hidden");
  winner.classList.add("hidden");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    startGame.classList.add("hidden");
    overlay.classList.add("hidden");
    winner.classList.add("hidden");
  }
});

// let activePlayer;

const playerScoreEl = document.querySelector(".player-score");
const computerScoreEl = document.querySelector(".computer-score");
const infoText = document.querySelector(".text");
console.log(playerScoreEl.textContent);
console.log(computerScoreEl.textContent);

let playerScore = 0;
let computerScore = 0;

let playerChioce;
let computerChoice;

const maxScore = 3;

const rock = document.querySelector(".rock-pic");
const paper = document.querySelector(".paper-pic");
const scissors = document.querySelector(".scissors");

const images = document.querySelectorAll("img");

// console.log(rock, paper, scissors);

images.forEach(function (el, i) {
  el.addEventListener("click", function (e) {
    playerChioce = e.target.dataset.choice;
    console.log(playerChioce);

    const choices = ["rock", "paper", "scissors"];
    computerChoice = choices[Math.trunc(Math.random() * choices.length)];
    console.log(computerChoice);
    // Player is choosing ROCK
    if (playerChioce === "rock" && computerChoice === "rock") {
      infoText.textContent = "It's a tie!";
    }
    if (playerChioce === "rock" && computerChoice === "paper") {
      ++computerScore;
      computerScoreEl.textContent = computerScore;
      infoText.textContent = `Computer choice is ${computerChoice}!`;
    }
    if (playerChioce === "rock" && computerChoice === "scissors") {
      ++playerScore;
      playerScoreEl.textContent = playerScore;
      infoText.textContent = `Computer choice is ${computerChoice}!`;
    }
    // Player is choosing PAPER
    if (playerChioce === "paper" && computerChoice === "paper") {
      infoText.textContent = "It's a tie!";
    }
    if (playerChioce === "paper" && computerChoice === "rock") {
      ++playerScore;
      playerScoreEl.textContent = playerScore;
      infoText.textContent = `Computer choice is ${computerChoice}!`;
    }
    if (playerChioce === "paper" && computerChoice === "scissors") {
      ++computerScore;
      computerScoreEl.textContent = computerScore;
      infoText.textContent = `Computer choice is ${computerChoice}!`;
    }
    // Player is choosing SCISSORS
    if (playerChioce === "scissors" && computerChoice === "scissors") {
      infoText.textContent = "It's a tie!";
    }
    if (playerChioce === "scissors" && computerChoice === "paper") {
      ++playerScore;
      playerScoreEl.textContent = playerScore;
      infoText.textContent = `Computer choice is ${computerChoice}!`;
    }
    if (playerChioce === "scissors" && computerChoice === "rock") {
      ++computerScore;
      computerScoreEl.textContent = computerScore;
      infoText.textContent = `Computer choice is ${computerChoice}!`;
    }

    if (playerScore === maxScore || computerScore === maxScore) {
      startGame.classList.remove("hidden");
      overlay.classList.remove("hidden");
      winner.classList.remove("hidden");
      startGame.textContent = "Try Again";

      if (playerScore === maxScore) {
        winner.textContent = "You won the game!";
        winner.style.color = "green";
      } else {
        winner.textContent = "You lost the game!";
        winner.style.color = "red";
      }

      infoText.textContent = "First who reaches score of three wins the game!";
      playerScore = 0;
      computerScore = 0;
      playerScoreEl.textContent = 0;
      computerScoreEl.textContent = 0;
    }
  });
});
