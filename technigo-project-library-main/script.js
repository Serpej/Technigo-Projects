
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
const atsushiTheBlazingSky = new card ("Atsushi, the Blazing Sky", 4, "creature", "Flying, trample. When Atsushi dies, choose one — Exile the top two cards of your library. Until the end of your next turn, you may play those cards. Create three Treasure tokens. 4/4", "deck-images/AtsushitheBlazingSky.webp");
const bigScore = new card ("Big Score", 4 , "instant", "As an additional cost to cast this spell, discard a card. Draw two cards and create two Treasure tokens.", "deck-images/Big-Score.webp");
const blasphemousAct = new card ("Blasphemous Act", 9, "sorcery", "This spell costs 1 less to cast for each creature on the battlefield. Blasphemous Act deals 13 damage to each creature.", "deck-images/BlasphemousAct.webp");
const bloodMoon = new card ("Blood Moon", 3, "enchantment", "Nonbasic lands are Mountains.", "deck-images/BloodMoon.webp");
const brashTaunter = new card ("Brash Taunter", 5, "creature", "Indestructible. Whenever this creature is dealt damage, it deals that much damage to target opponent. 2R, : This creature fights another target creature. 1/1", "deck-images/BrashTaunter.webp");
const cemeteryGatekeeper =  new card ("Cemetery Gatekeeper", 2, "creature", "First strike. When this creature enters, exile a card from a graveyard. Whenever a player plays a land or casts a spell, if it shares a card type with the exiled card, this creature deals 2 damage to that player.", "deck-images/CemeteryGatekeeper.webp");
const chandraTorchOfDefiance = new card ("Chandra, Torch of Defiance", 4, "planeswalker", "+1: Exile the top card of your library. You may cast that card. If you don't, Chandra deals 2 damage to each opponent. +1:Add RR. -3: Chandra deals 4 damage to target creature. -7: You get an emblem with 'Whenever you cast a spell, this emblem deals 5 damage to any target.'. Starting loyalty: 4.", "deck-images/ChandraTorchofDefiance.webp");
const chaosWarp = new card ("Chaos Warp", 3, "instant", "The owner of target permanent shuffles it into their library, then reveals the top card of their library. If it's a permanent card, they put it onto the battlefield.", "deck-images/ChaosWarp.webp");
const combustibleGearhulk = new card ("Combustible Gearhulk", 6, "artifact creature", "First strike. When this creature enters, target opponent may have you draw three cards. If the player doesn't, you mill three cards, then this creature deals damage to that player equal to the total mana value of those cards. 6/6", "deck-images/CombustibleGearhulk.webp");
const cursedMirror = new card ("Cursed Mirror", 3, "artifact", "Tap: Add R. As this artifact enters, you may have it become a copy of any creature on the battlefield until end of turn, except it has haste.", "deck-images/CursedMirror.webp");
const delayedBlastFireball = new card ("Delayed Blast Fireball", 3, "instant", "Delayed Blast Fireball deals 2 damage to each opponent and each creature they control. If this spell was cast from exile, it deals 5 damage to each opponent and each creature they control instead. Foretell  (During your turn, you may pay  and exile this card from your hand face down. Cast it on a later turn for its foretell cost.)", "deck-images/DelayedBlastFireball.webp");
const descentIntoAvernus = new card("Descent into Avernus", 3, "enchantment", "At the beginning of your upkeep, put two descent counters on this enchantment. Then each player creates X Treasure tokens and this enchantment deals X damage to each player, where X is the number of descent counters on this enchantment.", "deck-images/DescentIntoAvernus.webp");
const desertOfTheFervent = new card ("Desert of the Fervent", 0, "land", "This land enters tapped. Tap: Add R. Cycling 1R (1R, Discard this card: Draw a card.)", "deck-images/DesertoftheFervent.webp");
const dictateOfTheTwinGods = new card ("Dictate of the Twin Gods", 5, "enchantment", "Flash. If a source would deal damage to a permanent or player, it deals double that damage to that permanent or player instead.", "deck-images/DictateOfTheTwinGods.webp");
const disruptDecorum =  new card ("Disrupt Decorum", 4, "sorcery", "Goad all creatures you don't control. (Until your next turn, those creatures attack each combat if able and attack a player other than you if able.)", "deck-images/DisruptDecorum.webp");
const dwarvenMine = new card ("Dwarven Mine", 0, "land", "(Tap: Add R.) This land enters tapped unless you control three or more other Mountains. When this land enters untapped, create a 1/1 red Dwarf creature token.", "deck-images/DwarvenMine.webp");
const fieryEmancipation = new card ("Fiery Emancipation", 6, "enchantment", "If a source you control would deal damage to a permanent or player, it deals triple that damage to that permanent or player instead.", "deck-images/FieryEmancipation.webp");


//fortsätt i bokstavsordning här.

const burningInquiry = new card ("Burning Inquiry", 1, "sorcery", "Each player draws three cards, then discards three cards at random.", "deck-images/BurningInquiry.webp");

const mountain = new card("Mountain", 0, "land", "Tap: add R to you manapool.", "./deck-images/mountain.webp");
const lightningBolt = new card("Lightning Bolt", 1, "instant", "Deal 3 damage to any target.", "./deck-images/Lightning-Bolt.webp");

const cardsInDeck = [
  angerOfTheGods, 
  ankhOfMishra, 
  arcaneSignet, 
  atsushiTheBlazingSky, 
  bigScore, 
  blasphemousAct, 
  bloodMoon, 
  brashTaunter, 
  burningInquiry, 
  cemeteryGatekeeper,
  chandraTorchOfDefiance,
  chaosWarp,
  combustibleGearhulk,
  cursedMirror,
  delayedBlastFireball,
  descentIntoAvernus,
  desertOfTheFervent,
  dictateOfTheTwinGods,
  disruptDecorum,
  dwarvenMine,
  fieryEmancipation,
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