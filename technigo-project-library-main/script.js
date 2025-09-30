
const cardsInDeck = [
  {
    name: "Mountain",
    type: "land",
    manaValue: 0,
    oracleText: "Tap: add R to you manapool",
    img: "./deck-images/mountain.webp"
  },
  {    
    name: "Lightning Bolt",
    type: "instant",
    manaValue: 1,
    oracleText: "Deal 3 damage to any target.",
    img: "./deck-images/Lightning-Bolt.webp"

  }
]


const ul = document.createElement("ul");
ul.id = "decklist";

cardsInDeck.forEach((card => {
  const li = document.createElement("li");
  li.textContent = `1x ${card.name}`;
  const cardImg = document.createElement("img");
  cardImg.classList.add("hover-img");
  li.appendChild(cardImg);

  li.addEventListener("mouseenter", () => {
    cardImg.src = card.img;
    cardImg.style.visibility = "visible";
  })

  li.addEventListener("mouseleave", () => {
    cardImg.style.visibility = "hidden";
  })

  ul.appendChild(li);
}));

document.getElementById("deck-container").appendChild(ul);
/* ul.appendChild(cardImg); */