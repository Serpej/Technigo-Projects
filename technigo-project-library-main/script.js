
function card (name, manaValue, type, oracleText, img) {
  this.name = name;
  this.manaValue = manaValue;
  this.type = type;
  this.oracleText = oracleText;
  this.img = img;
}

const angerOfTheGods = new card ("Anger of the Gods", 3, "sorcery", "Anger of the Gods deals 3 damage to each creature. If a creature dealt damage this way would die this turn, exile it instead.", "deck-images/AngeroftheGods.webp");
const ankhOfMishra = new card ("Ankh of Mishra", 2, "artifact", "Whenever a land enters, this artifact deals 2 damage to that land's controller.", "deck-images/AnkhofMishra.webp");
const arcaneSignet =  new card("Arcane Signet", 2, "artifact", "Tap:: Add one mana of any color in your commander's color identity.", ".//deck-images/Arcane-signet.webp");
const atsushiTheBlazingSky = new card ("Atsushi, the Blazing Sky", 4, "creature", "Flying, trample. When Atsushi dies, choose one — Exile the top two cards of your library. Until the end of your next turn, you may play those cards. Create three Treasure tokens.", "deck-images/AtsushitheBlazingSky.webp")
const bigScore = new card ("Big Score", 4 , "instant", "As an additional cost to cast this spell, discard a card. Draw two cards and create two Treasure tokens.", "deck-images/Big-Score.webp");

//fortsätt i bokstavsordning här.

const burningInquiry = new card ("Burning Inquiry", 1, "sorcery", "Each player draws three cards, then discards three cards at random.", "deck-images/BurningInquiry.webp");
const DesertOfTheFervent = new card ("Desert of the Fervent", 0, "land", "This land enters tapped. Tap: Add R. Cycling 1R (1R, Discard this card: Draw a card.)", "deck-images/DesertoftheFervent.webp")
const dwarvenMine = new card ("Dwarven Mine", 0, "land", "(Tap: Add R.) This land enters tapped unless you control three or more other Mountains. When this land enters untapped, create a 1/1 red Dwarf creature token.", "deck-images/DwarvenMine.webp");

const mountain = new card("Mountain", 0, "land", "Tap: add R to you manapool.", "./deck-images/mountain.webp");
const lightningBolt = new card("Lightning Bolt", 1, "instant", "Deal 3 damage to any target.", "./deck-images/Lightning-Bolt.webp");

const cardsInDeck = [
  angerOfTheGods, ankhOfMishra, arcaneSignet, atsushiTheBlazingSky, bigScore, burningInquiry, DesertOfTheFervent, dwarvenMine
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