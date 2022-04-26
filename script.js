"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // when there is no input
  if (!guess) {
    displayMessage("⛔️ No Number!");
  }
  // when player wins
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highScore").textContent = highScore;
    }
  }
  //When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈Too High!" : "📉Too Low!!!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "😭 You lost the game !!!!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
