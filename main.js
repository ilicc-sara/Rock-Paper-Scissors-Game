"use strict";
import "./style.css";

const startGame = document.querySelector(".start-btn");
const overlay = document.querySelector(".overlay");

startGame.addEventListener("click", function () {
  startGame.classList.add("hidden");
  overlay.classList.add("hidden");
});
