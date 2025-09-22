const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey"
];

// 1)
// create a loop that prints all
// the pokemons from the pokemons array
// invoke the function to see that it works

const loopOverArray = ( array => {
  array.forEach(element => {
    console.log(element);
  });
})
//loopOverArray(pokemons);

// 2)
// Create an object for the pokemon Pikachu.
// it could have properties such as name, element,
// strength, color, amountOfLegs or something like that.

const pokemon = {
  name: "Pikachu",
  type: "Electric",
  generation: 1,
  weakness: ["Ground"],
  resistant: ["Electric", "Flying"]
}

// 3)
// console.log something like
// 'Pikachu is a electricity pokemon with the strength of 32'
// Selecting some of the information about your pikachu object.

console.log(`${pokemon.name} is an ${pokemon.type} pokémon who is weak against ${pokemon.weakness} pokémon.`);

// 4)
// Add the property stillToCatch: true to the Pikachu object.

pokemon.stillToCatch = true;

// 5)
// change the value of the key strength in the Pikachu object.

pokemon.generation = 2;

// 6)
// Delete a property from the Pikachu object.

 delete pokemon.resistant;

 console.log(pokemon);

// 7)
// Fill up this array with a few more pokemons.
// It is an array with objects!
// I made some suggestions
// but feel free to change as you want.
const moreAboutPokemons = [
  {
    name: "Bulbasaur",
    element: "water",
    strength: 13
  },
  {
    name: "Charmander",
    element: "fire",
    strength: 32
  }
];

// 8)
// Print out all the NAMES of the pokemons in this new array.

// 9)
// Print out something like
// 'Bulbasaur is a water pokemon with the strength of 32'
// Do this for all the pokemons.
