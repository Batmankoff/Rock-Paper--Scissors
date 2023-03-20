const choices = ["rock", "paper", "scissors"];

const computerChoice = choices[Math.floor(Math.random() * choices.length)];
let playerChoice = "";
let isButtonClicked = false;

const determineWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return "Ничья!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "Вы выиграли!";
  } else {
    return "Компьютер выиграл!";
  }
};

displayComputerChoice = (computerChoice) => {
  document.querySelector(".computer__choice-" + computerChoice).style.display =
    "block";
  document.querySelector(
    ".computer__" + computerChoice + "-btn"
  ).style.display = "none";
};

displayPlayerChoice = (playerChoice) => {
  document.querySelector(".player__choice-" + playerChoice).style.display =
    "block";
  document.querySelector(".player__" + playerChoice + "-btn").style.display =
    "none";
};

visibleModal = () => {
  document.querySelector(".result__modal").classList.add("visible");
};

document.addEventListener("click", function (event) {
  // If a button has already been clicked, do nothing
  if (isButtonClicked) {
    return;
  }

  switch (event.target.classList[0]) {
    case "player__rock-btn":
      playerChoice = "rock";
      break;
    case "player__paper-btn":
      playerChoice = "paper";
      break;
    case "player__scissors-btn":
      playerChoice = "scissors";
      break;
    default:
      return;
  }

  const winner = determineWinner(playerChoice, computerChoice);
  document.querySelector(".result__text").textContent = winner;
  displayComputerChoice(computerChoice);
  displayPlayerChoice(playerChoice);
  setTimeout(() => visibleModal(), 1000);

  // Set isButtonClicked to true to prohibit clicks on other buttons
  isButtonClicked = true;
});
