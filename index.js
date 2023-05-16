
let cards = []
let sum = 0;
let hasBlackJack = false
let isAlive = true
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
  isAlive = true

  let firstNumber = getRandomCard()
  let secondNumber = getRandomCard()
  cards = [firstNumber, secondNumber]
  sum = firstNumber + secondNumber
  renderGame()
}

function getRandomCard() {
  let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }

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
  let card = getRandomCard();
  sum += card;

  cards.push(card);
  renderGame();
}








