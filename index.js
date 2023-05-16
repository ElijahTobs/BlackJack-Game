const container = document.querySelector(".container");

container.innerHTML = `
      <h1>Blackjack</h1>
      <p id="message-el">Want to play a round?</p>
      <p id="cards-el">Cards:</p>
      <p id="sum-el">Sum:</p>
      <button onclick="startGame()">START GAME</button>
`

let secondCard = 4
let firstCard = 10

if (sum <= 20) {
  message = "Do you want to draw a new card?"
} else if (sum === 21) {
  message = "You've got Blackjack!"
  hasBlackJack = true
} else {
  message = "You're out of the game!"
  isAlive = false
}











