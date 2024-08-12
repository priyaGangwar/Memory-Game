const container = document.querySelector(".grid-container");
let gameCards = [];
let firstSelection, secondSelection;
let isBoardLocked = false;
let currentScore = 0;
let positiveScore = 0;
let negativeScore = 0;
let matchedPairs = 0;

document.querySelector(".score").textContent = currentScore;
document.querySelector(".positive-score").textContent = positiveScore;
document.querySelector(".negative-score").textContent = negativeScore;

fetch("./cards.json")
  .then((response) => response.json())
  .then((cardData) => {
    gameCards = [...cardData, ...cardData];
    randomizeCards();
    createCards();
  });

function randomizeCards() {
  let remainingCards = gameCards.length,
      randomIndex,
      tempValue;

  while (remainingCards > 0) {
    randomIndex = Math.floor(Math.random() * remainingCards);
    remainingCards--;

    tempValue = gameCards[remainingCards];
    gameCards[remainingCards] = gameCards[randomIndex];
    gameCards[randomIndex] = tempValue;
  }
}

function createCards() {
  gameCards.forEach((card) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.setAttribute("data-card", card.name);
    cardDiv.innerHTML = `
      <div class="front">
        <img class="front-image" src=${card.image} />
      </div>
      <div class="back"></div>
    `;
    container.appendChild(cardDiv);
    cardDiv.addEventListener("click", handleCardClick);
  });
}

function handleCardClick() {
  if (isBoardLocked) return;
  if (this === firstSelection) return;

  this.classList.add("flipped");

  if (!firstSelection) {
    firstSelection = this;
    return;
  }

  secondSelection = this;
  isBoardLocked = true;

  checkForCardMatch();
}

function checkForCardMatch() {
  if (firstSelection.dataset.card === secondSelection.dataset.card) {
    positiveScore += 10;
    matchedPairs++;
    disableSelectedCards();
    checkForGameEnd();
  } else {
    negativeScore -= 2;
    resetFlippedCards();
  }

  currentScore = positiveScore + negativeScore;
  updateScores();
}

function disableSelectedCards() {
  firstSelection.removeEventListener("click", handleCardClick);
  secondSelection.removeEventListener("click", handleCardClick);

  resetGameBoard();
}

function resetFlippedCards() {
  setTimeout(() => {
    firstSelection.classList.remove("flipped");
    secondSelection.classList.remove("flipped");
    resetGameBoard();
  }, 1000);
}

function resetGameBoard() {
  [firstSelection, secondSelection, isBoardLocked] = [null, null, false];
}

function checkForGameEnd() {
  if (matchedPairs === gameCards.length / 2) {
    setTimeout(() => {
      alert("Congratulations! You've matched all the cards!");
      restartGame();
    }, 500);
  }
}

function restart() {
  resetGameBoard();
  matchedPairs = 0;
  positiveScore = 0;
  negativeScore = 0;
  currentScore = 0;
  updateScores();
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => card.remove());
  randomizeCards();
  createCards();
}

function updateScores() {
  document.querySelector(".score").textContent = currentScore;
  document.querySelector(".positive-score").textContent = positiveScore;
  document.querySelector(".negative-score").textContent = negativeScore;
}
