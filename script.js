let sum = 0
let message = ""
let pickedCards = []
let currentCard = document.getElementById("cards")
let sumEl = document.getElementById("sum")
let intro = document.getElementById("intro")
let isBlackJack = false
let stillOn = false


function getRandomNumber() {

  let random = Math.floor(Math.random() * 13) + 1
  if (random > 10) {
    return 10
  } else if (random === 1) {
    return 11
  } else {
    return random
  }

}

function startGame() {
  stillOn = true
  let card1 = getRandomNumber()
  let card2 = getRandomNumber()
  pickedCards = [card1, card2]
  sum = card1 + card2
  renderGame()
}

function renderGame() {
  currentCard.textContent = "Cards: "
  for (let x in pickedCards) {
    currentCard.textContent += pickedCards[x] + " "
  }

  sumEl.textContent = "Sum: " + sum

  if (sum < 21) {
    message = "Do you want to draw a new card"
  } else if (sum === 21) {
    isBlackJack = true
    message = "You've got a blackjack"
  } else {
    stillOn = false
    message = "Game Over!"
  }
  intro.textContent = message
}

function newCard() {
  if (isBlackJack === false & stillOn === true) {
    let card1 = getRandomNumber()
    pickedCards.push(card1)
    sum += card1
    renderGame()
  }
}