const listForDeck = document.getElementById("decklist-item");
const cardImg = document.getElementById("hover-img");

const hover = function (cardImg) {
  listForDeck.addEventListener("mouseenter", () => {
    cardImg.style.visibility = "visible";
  })

  listForDeck.addEventListener("mouseleave", () => {
    cardImg.style.visibility = "hidden";
  })
}


const cardsInDeck = [
  {
    name: "Mountain",
    type: "land",
    manaValue: 0,
    oracleText: "Tap: add R to you manapool"
  }
]

hover(cardImg);