
function card (name, manaValue, type, oracleText, img) {
  this.name = name;
  this.manaValue = manaValue;
  this.type = type;
  this.oracleText = oracleText;
  this.img = img;
}

const mountain = new card("Mountain", 0, "land", "Tap: add R to you manapool.","./deck-images/mountain.webp");
const lightningBolt = new card("Lightning Bolt", 1, "instant", "Deal 3 damage to any target.", "./deck-images/Lightning-Bolt.webp");

const cardsInDeck = [
  mountain, lightningBolt
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