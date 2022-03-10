let sum = 0
let pickedCards = []
let currentCard = document.getElementById("cards")
let sumEl = document.getElementById("sum")


function getRandomNumber() {
  let random = Math.floor(Math.random() * 11) +1
  return random
}

function startGame() {
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
}
