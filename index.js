
let firstCard = getRandomNumber();
let secondCard = getRandomNumber();
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function startGame() {
  renderGame()
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10)
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum
  cardsEl.textContent = "Cards: "
  for (let x in cards) {
    cardsEl.textContent += cards[x] + " "
  }


  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
      message = "You've got Blackjack!"
      hasBlackJack = true
  } else {
      message = "You're out of the game!"
      isAlive = false
  }

  messageEl.textContent = message
}


function newCard() {
  let card = getRandomNumber();
  sum += card;

  cards.push(card);
  renderGame();
}








