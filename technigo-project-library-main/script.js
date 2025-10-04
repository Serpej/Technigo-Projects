
function card (name, manaValue, type, oracleText, img) {
  this.name = name;
  this.manaValue = manaValue;
  this.type = type;
  this.oracleText = oracleText;
  this.img = img;
}

function modalCard (name, manaValue, type, oracleText, img, img2) {
  this.name = name;
  this.manaValue = manaValue;
  this.type = type;
  this.oracleText = oracleText;
  this.img = img;
  this.img2 = img2;
}

const angerOfTheGods = new card ("Anger of the Gods", 3, "sorcery", "Anger of the Gods deals 3 damage to each creature. If a creature dealt damage this way would die this turn, exile it instead.", "deck-images/AngeroftheGods.webp");
const ankhOfMishra = new card ("Ankh of Mishra", 2, "artifact", "Whenever a land enters, this artifact deals 2 damage to that land's controller.", "deck-images/AnkhofMishra.webp");
const arcaneSignet =  new card("Arcane Signet", 2, "artifact", "Tap:: Add one mana of any color in your commander's color identity.", ".//deck-images/Arcane-signet.webp");
const atsushiTheBlazingSky = new card ("Atsushi, the Blazing Sky", 4, "creature", "Flying, trample. When Atsushi dies, choose one — Exile the top two cards of your library. Until the end of your next turn, you may play those cards. Create three Treasure tokens. 4/4", "deck-images/AtsushitheBlazingSky.webp");
const bigScore = new card ("Big Score", 4 , "instant", "As an additional cost to cast this spell, discard a card. Draw two cards and create two Treasure tokens.", "deck-images/Big-Score.webp");
const blasphemousAct = new card ("Blasphemous Act", 9, "sorcery", "This spell costs 1 less to cast for each creature on the battlefield. Blasphemous Act deals 13 damage to each creature.", "deck-images/BlasphemousAct.webp");
const bloodMoon = new card ("Blood Moon", 3, "enchantment", "Nonbasic lands are Mountains.", "deck-images/BloodMoon.webp");
const brashTaunter = new card ("Brash Taunter", 5, "creature", "Indestructible. Whenever this creature is dealt damage, it deals that much damage to target opponent. 2R, : This creature fights another target creature. 1/1", "deck-images/BrashTaunter.webp");
const burningInquiry = new card ("Burning Inquiry", 1, "sorcery", "Each player draws three cards, then discards three cards at random.", "deck-images/BurningInquiry.webp");
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
const fieryGambit = new card ("Fiery Gambit", 3, "sorcery", "Flip a coin until you lose a flip or choose to stop flipping. If you lose a flip, Fiery Gambit has no effect. If you win one or more flips, Fiery Gambit deals 3 damage to target creature. If you win two or more flips, Fiery Gambit deals 6 damage to each opponent. If you win three or more flips, draw nine cards and untap all lands you control.", "deck-images/FieryGambit.webp");
const flameRift = new card ("Flame Rift", 2, "sorcery", "Flame Rift", "deck-images/FlameRift.webp");
const forgottenCave = new card ("Forgotten Cave", 0, "land", "This land enters tapped. Tap: Add R. Cycling R (R, Discard this card: Draw a card.)", "deck-images/ForgottenCave.webp");
const furnaceOfRath = new card ("Furnace of Rath", 4, "enchantment", "If a source would deal damage to a permanent or player, it deals double that damage to that permanent or player instead.", "deck-images/FurnaceOfRath.webp");
const gamble = new card("Gamble", 1, "sorcery", "Search your library for a card, put that card into your hand, discard a card at random, then shuffle.", "deck-images/Gamble.webp");
const gildedLotus = new card ("Gilded Lotus", 5, "artifact", "Tap: Add three mana of any one color.", "deck-images/GildedLotus.webp");
const goblinCratermaker = new card ("Goblin Cratermaker", 2, "creature", ", Sacrifice this creature: Choose one — This creature deals 2 damage to target creature. Destroy target colorless nonland permanent. 2/2", "deck-images/GoblinCratermaker.webp");
const hourOfDevastation = new card ("Hour of Devastation", 5, "sorcery", "All creatures lose indestructible until end of turn. Hour of Devastation deals 5 damage to each creature and each non-Bolas planeswalker.", "deck-images/HourOfDevastation.webp");
const infernoTitan = new card ("Inferno Titan", 6, "creature", "R: This creature gets +1/+0 until end of turn. Whenever this creature enters or attacks, it deals 3 damage divided as you choose among one, two, or three targets. 6/6", "deck-images/InfernoTitan.webp");
const jeskasWill = new card ("Jeska's Will", 3, "sorcery", "Choose one. If you control a commander as you cast this spell, you may choose both instead. Add  for each card in target opponent's hand. Exile the top three cards of your library. You may play them this turn.", "deck-images/Jeska'sWill.webp");
const lightningBolt = new card("Lightning Bolt", 1, "instant", "Deal 3 damage to any target.", "./deck-images/Lightning-Bolt.webp");
const lightningGreaves = new card ("Lightning Greaves",2 , "artifact", "Equipped creature has haste and shroud. (It can't be the target of spells or abilities.) Equip 0", "deck-images/LightningGreaves.webp");
const lotusPetal = new card ("Lotus Petal", 0, "artifact", "Tap, Sacrifice this artifact: Add one mana of any color.", "deck-images/lotusPetal.webp");
const magmaticForce = new card ("Magmatic Force", 8, "creature", "At the beginning of each upkeep, this creature deals 3 damage to any target. 7/7", "deck-images/MagmaticForce.webp");
const magusOfTheWheel = new card ("Magus of the Wheel", 3, "creature", "1R, Tap, Sacrifice this creature: Each player discards their hand, then draws seven cards.", "deck-images/MagusOfTheWheel.webp");
const manabarbs = new card ("Manabarbs", 4, "enchantment", "Whenever a player taps a land for mana, this enchantment deals 1 damage to that player.", "deck-images/Manabarbs.webp");
const manaGeyser = new card ("Mana Geyser", 5, "sorcery", "Add R for each tapped land your opponents control.", "deck-images/ManaGeyser.webp");
const mechanizedWarfare = new card ("Mechanized Warfare", 3, "enchantment", "If a red or artifact source you control would deal damage to an opponent or a permanent an opponent controls, it deals that much damage plus 1 instead.", "deck-images/mechanizedWarfare.webp");
const mizzixsMastery = new card("Mizzix's Mastery", 4, "sorcery", "Exile target card that's an instant or sorcery from your graveyard. For each card exiled this way, copy it, and you may cast the copy without paying its mana cost. Exile Mizzix's Mastery. Overload 5RRR (You may cast this spell for its overload cost. If you do, change 'target' in its text to 'each.')", "deck-images/mizzix'sMastery.webp");
const moltenPrimordial = new card("Molten Primordial", 7, "creature", "Haste.When this creature enters, for each opponent, gain control of up to one target creature that player controls until end of turn. Untap those creatures. They gain haste until end of turn. 6/4", "deck-images/moltenPrimordial.webp");
const mountain = new card("Mountain", 0, "land", "Tap: add R to you manapool.", "./deck-images/mountain.webp");
const nykthosShrineToNyx = new card ("Nykthos, Shrine to Nyx", 0, "land", ": Add C. 2, Tap: Choose a color. Add an amount of mana of that color equal to your devotion to that color. (Your devotion to a color is the number of mana symbols of that color in the mana costs of permanents you control.)", "deck-images/nykthosShrineToNyx.webp");
const ojerAxonilDeepestMightOrTempleOfPower = new modalCard ("Ojer Axonil, Deepest Might // Temple of Power", 4, "creature", "Trample. If a red source you control would deal an amount of noncombat damage less than Ojer Axonil's power to an opponent, that source deals damage equal to Ojer Axonil's power instead. When Ojer Axonil dies, return it to the battlefield tapped and transformed under its owner's control. 4/4", "deck-images/ojerAxonilDeepestMightORtempleOfPower1.webp", "deck-images/ojerAxonilDeepestMightORtempleOfPower2.webp");
const priceOfProgress =  new card ("Price of Progress", 2, "instant", "Price of Progress deals damage to each player equal to twice the number of nonbasic lands that player controls", "deck-images/priceOfProgress.webp");
const pyreticRitual = new card ("Pyretic Ritual", 2, "instant", "Add RRR.", "deck-images/pyreticRitual.webp");
const pyroclasm = new card ("Pyroclasm", 2, "sorcery", "Pyroclasm", "deck-images/pyroclasm.webp");
const pyrohemia = new card ("Pyrohemia", 4, "enchantment", "At the beginning of the end step, if no creatures are on the battlefield, sacrifice this enchantment. R: This enchantment deals 1 damage to each creature and each player.", "deck-images/pyrohemia.webp");
const quakebringer = new card ("Quakebringer", 5, "creature", "Your opponents can't gain life. At the beginning of your upkeep, Quakebringer deals 2 damage to each opponent. This ability triggers only if Quakebringer is on the battlefield or if Quakebringer is in your graveyard and you control a Giant. Foretell 2RR. 5/4", "deck-images/quakebringer.webp");
const questForPureFlame = new card ("Quest for Pure Flame", 1, "enchantment", "Whenever a source you control deals damage to an opponent, you may put a quest counter on this enchantment. Remove four quest counters from this enchantment and sacrifice it: If any source you control would deal damage to a permanent or player this turn, it deals double that damage to that permanent or player instead.", "deck-images/questForPureFlame.webp");
const rampagingFerocidon = new card ("Rampaging Ferocidon", 3, "creature", "Menace. Players can't gain life. Whenever another creature enters, this creature deals 1 damage to that creature's controller. 3/3", "deck-images/rampagingFerocidon.webp");
const razorkinNeedlehead = new card ("Razorkin Needlehead", 2, "creature", "This creature has first strike during your turn. Whenever an opponent draws a card, this creature deals 1 damage to them. 2/2", "deck-images/razorkinNeedlehead.webp");
const repercussion = new card ("Repercussion", 3, "enchantment", "Whenever a creature is dealt damage, this enchantment deals that much damage to that creature's controller.", "deck-images/repercussion.webp");
const roilingVortex =  new card ("Roiling Vortex", 2, "enchantment", "At the beginning of each player's upkeep, this enchantment deals 1 damage to them. Whenever a player casts a spell, if no mana was spent to cast that spell, this enchantment deals 5 damage to that player. R: Your opponents can't gain life this turn.", "deck-images/roilingVortex.webp");
const rousingRefrain = new card  ("Rousing Refrain", 5, "socrcery", "Add R for each card in target opponent's hand. Until end of turn, you don't lose this mana as steps and phases end. Exile Rousing Refrain with three time counters on it.Suspend 3 — 1R (Rather than cast this card from your hand, you may pay 1R and exile it with three time counters on it. At the beginning of your upkeep, remove a time counter. When the last is removed, you may cast it without paying its mana cost.)", "deck-images/rousingRefrain.webp");
const rubyMedallion = new card ("Ruby Medallion", 2, "artfact", "Red spells you cast cost 1 less to cast.", "deck-images/rubyMedallion.webp");
const scavengerGrounds = new card ("Scavenger Grounds", 0, "land", ": Add 1. Tap, 2, Sacrifice a Desert: Exile all graveyards.", "deck-images/scavengerGrounds.webp");
const scytheclawRaptor =  new card ("Scytheclaw Raptor", 3, "creature", "Whenever a player casts a spell, if it's not their turn, this creature deals 4 damage to them. 4/3", "deck-images/scytheclawRaptor.webp");
const simianSpiritGuide = new card ("Simian Spirit Guide", 3, "creature", "Exile this card from your hand: Add R. 2/2", "deck-images/simianSpiritGuide.webp");
const smolderingCrater = new card ("Smoldering Crater", 0, "land", "This land enters tapped. Tap: Add R. Cycling 2 (2, Discard this card: Draw a card.)", "deck-images/smolderingCrater.webp");
const solphimMayhemDominus = new card ("Solphim, Mayhem Dominus", 4, "creature", "If a source you control would deal noncombat damage to an opponent or a permanent an opponent controls, it deals double that damage to that player or permanent instead.1RR, Discard two cards: Put an indestructible counter on Solphim. ( can be paid with either  or 2 life.) 5/4", "deck-images/solphimMayhemDominus.webp");
const solRing = new card ("Sol Ring", 1, "artifact", "Tap: Add 2.", "deck-images/solRing.webp");
const spellshock = new card ("Spellshock", 3, "enchantment", "Whenever a player casts a spell, this enchantment deals 2 damage to that player.", "deck-images/spellshock.webp");
const stigmaLasher = new card ("Stigma Lasher", 2, "creature", "Wither (This deals damage to creatures in the form of -1/-1 counters.) Whenever this creature deals damage to a player, that player can't gain life for the rest of the game. 2/2", "deck-images/stigmaLasher.webp");
const sulfuricVortex = new card ("Sulfuric Vortex", 2, "enchantment", "At the beginning of each player's upkeep, this enchantment deals 2 damage to that player. If a player would gain life, that player gains no life instead.", "deck-images/sulfuricVortex.webp");
const sunspineLynx = new card ("Sunspine Lynx", 4, "creature", "Players can't gain life. Damage can't be prevented. When this creature enters, it deals damage to each player equal to the number of nonbasic lands that player controls. 5/4", "deck-images/sunspineLynx.webp");
const swelteringSuns = new card ("Sweltering Suns", 3, "sorcery", "Sweltering Suns deals 3 damage to each creature. Cycling 3 (3, Discard this card: Draw a card.)", "deck-images/swelteringSuns.webp");
const torbranThaneOfRedFell = new card ("Torbran, Thane of Red Fell", 4, "creature", "If a red source you control would deal damage to an opponent or a permanent an opponent controls, it deals that much damage plus 2 instead. 2/4", "deck-images/torbranThaneofRedFell.webp");
const underworldBreach = new card ("Underworld Breach", 2, "enchantment", "Each nonland card in your graveyard has escape. The escape cost is equal to the card's mana cost plus exile three other cards from your graveyard. (You may cast cards from your graveyard for their escape cost.) At the beginning of the end step, sacrifice this enchantment.", "deck-images/underworldBreach.webp");
const valakutAwakeningORValakutStoneforge = new modalCard ("Valakut Awakening // Valakut Stoneforge", 3, "instant", "Put any number of cards from your hand on the bottom of your library, then draw that many cards plus one.", "deck-images/valakutAwakeningORValakutStoneforge1.webp", "deck-images/valakutAwakeningORValakutStoneforge2.webp");
const vandalblast = new card ("Vandalblast", 1, "sorcery", "Destroy target artifact you don't control. Overload 4R (You may cast this spell for its overload cost. If you do, change 'target' in its text to 'each.')", "deck-images/vandalblast.webp");
const wayfarersBauble = new card ("Wayfarer's Bauble", 1, "artifact", "2, Tap, Sacrifice this artifact: Search your library for a basic land card, put that card onto the battlefield tapped, then shuffle.", "deck-images/wayfarersBauble.webp");
const WheelOfMisfortune = new card ("Wheel of Misfortune", 3, "sorcery", "Each player secretly chooses a number 0 or greater, then all players reveal those numbers simultaneously and determine the highest and lowest numbers revealed this way. Wheel of Misfortune deals damage equal to the highest number to each player who chose that number. Each player who didn't choose the lowest number discards their hand, then draws seven cards.", "deck-images/wheelOfMisfortune.webp");
const worldfire = new card ("Worldfire", 9, "sorcery", "Exile all permanents. Exile all cards from all hands and graveyards. Each player's life total becomes 1.", "deck-images/worldfire.webp");






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
  fieryGambit,
  flameRift,
  forgottenCave,
  furnaceOfRath,
  gamble,
  gildedLotus,
  goblinCratermaker,
  hourOfDevastation,
  infernoTitan,
  jeskasWill,
  lightningBolt,
  lightningGreaves,
  lotusPetal,
  magmaticForce,
  magusOfTheWheel,
  manabarbs,
  manaGeyser,
  mechanizedWarfare,
  mizzixsMastery,
  moltenPrimordial,
  mountain,
  nykthosShrineToNyx,
  ojerAxonilDeepestMightOrTempleOfPower,
  priceOfProgress,
  pyreticRitual,
  pyroclasm,
  pyrohemia,
  quakebringer,
  questForPureFlame,
  rampagingFerocidon,
  razorkinNeedlehead,
  repercussion,
  roilingVortex,
  rousingRefrain,
  rubyMedallion,
  scavengerGrounds,
  scytheclawRaptor,
  simianSpiritGuide,
  smolderingCrater,
  solphimMayhemDominus,
  solRing,
  spellshock,
  stigmaLasher,
  sulfuricVortex,
  sunspineLynx,
  swelteringSuns,
  torbranThaneOfRedFell,
  underworldBreach,
  valakutAwakeningORValakutStoneforge,
  vandalblast,
  wayfarersBauble,
  WheelOfMisfortune,
  worldfire
]


const ul = document.createElement("ul");
ul.id = "decklist";

cardsInDeck.forEach((card => {
  const li = document.createElement("li");

  // Create wrapper for images
  const imgWrapper = document.createElement("div");
  imgWrapper.style.cssText = `
    display: flex;
    position: absolute;
    left: 100%;
    bottom: -350%;
    margin-left: 2px;
  `;

  // Add more if it's a mountain
  li.textContent = card.name === "mountain" ? `26x ${card.name}` : `1x ${card.name}`;
 
  const cardImg = document.createElement("img");
  let cardImg2;
  cardImg.classList.add("hover-img");
  imgWrapper.appendChild(cardImg);

  if(card instanceof modalCard) {
    cardImg2 = document.createElement("img");
    cardImg2.classList.add("hover-img");
    cardImg.classList.add("hover-img");
    imgWrapper.appendChild(cardImg2);
  }

  li.addEventListener("mouseenter", () => {
    cardImg.src = card.img;
    cardImg.style.visibility = "visible";
    if(card instanceof modalCard) {
      cardImg2.src = card.img2
      cardImg2.style.visibility = "visible";
    }
  })

  li.addEventListener("mouseleave", () => {
    cardImg.style.visibility = "hidden";
    if(card instanceof modalCard) {
      cardImg2.style.visibility = "hidden";
    }
  })
  li.appendChild(imgWrapper);
  ul.appendChild(li);
}));

document.getElementById("deck-container").appendChild(ul);
/* ul.appendChild(cardImg); */