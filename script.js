"use strict";

function hiddenNum(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

let hiddenNumber;

document.querySelector(".easy").addEventListener("click", function () {
  hiddenNumber = hiddenNum(1, 20);
  document.querySelector(".between").textContent = "(Between 1 and 20)";
});

document.querySelector(".medium").addEventListener("click", function () {
  hiddenNumber = hiddenNum(1, 30);
  document.querySelector(".between").textContent = "(Between 1 and 30)";
});

document.querySelector(".hard").addEventListener("click", function () {
  hiddenNumber = hiddenNum(1, 50);
  document.querySelector(".between").textContent = "(Between 1 and 50)";
});

// If no level is selected, set level to 'Easy' and choose number.
if (document.querySelector(".number").textContent == "?") {
  hiddenNumber = hiddenNum(1, 20);
}

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (score > 0) {
    if (!guess) {
      document.querySelector(".message").textContent = "Please make a guess";
    } else if (hiddenNumber === guess) {
      document.querySelector(".message").textContent = "Nice, you guessed it!";
      document.querySelector(".number").textContent = hiddenNumber;
      // Turn background to green.
      document.querySelector("body").style.backgroundColor = "#60b347";
      // Update highscore while at it.
      if (
        document.querySelector(".highscore").textContent <
        document.querySelector(".score").textContent
      ) {
        document.querySelector(".highscore").textContent =
          document.querySelector(".score").textContent;
      }
    } else if (hiddenNumber != guess) {
      score -= 1;
      if (score === 0) {
        document.querySelector(".score").textContent = score;
        document.querySelector(".message").textContent = "You lost!";
        document.querySelector(".number").textContent = hiddenNumber;
      } else if (score != 0) {
        if (hiddenNumber > guess) {
          if (hiddenNumber - guess <= 3) {
            document.querySelector(".message").textContent =
              "You're close, keep trying!";
          } else document.querySelector(".message").textContent = "Too low!";
          document.querySelector(".score").textContent = score;
        } else if (hiddenNumber < guess) {
          if (guess - hiddenNumber <= 3) {
            document.querySelector(".message").textContent =
              "You're close, keep trying!";
          } else document.querySelector(".message").textContent = "Too high!";
          document.querySelector(".score").textContent = score;
        }
      }
    }
  }
});

// Reset everything on clicking 'Again!' button.
document.querySelector(".again").addEventListener("click", function () {
  hiddenNumber = hiddenNum(1, 20);
  document.querySelector(".number").textContent = hiddenNumber;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".highscore").textContent = 0;
});
