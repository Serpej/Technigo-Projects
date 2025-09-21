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

/* const countThem = () => {
  // print out, in a sentence, how many pokemons I have.
  // like: "I have x pokemons!"
}; */

const countThem = () => {
 let numOfpokemons = pokemons.length;

 console.log(`I have ${numOfpokemons} Pokémons`);
}

const orderThem = () => {
  // order the pokemons alphabetically
  //let pokemonsSorted = pokemons.sort();
  pokemons.sort();
  console.log(pokemons);
};
orderThem();

const flipThem = () => {
  // reverse the order of the pokemons
  pokemons.reverse();
  console.log(pokemons);
};
flipThem();

const makeThemBig = () => {
  // print the pokemons in UPPERCASE letters
  for (let i = 0; i < pokemons.length; i++) {
    pokemons[i] = pokemons[i].toUpperCase();
  }
  console.log(pokemons);
};
makeThemBig();


const onlyTheBs = () => {
  // only print the pokemons that starts with B
  
  const result = pokemons.filter((element) => {
   return element.toLowerCase().startsWith("b");
  });
  console.log(result);
};
onlyTheBs();

const notTheCs = () => {
  // remove all pokemons that starts with C

  const result = pokemons.filter( element => {
    return !element.toLowerCase().startsWith("c")
  });
  console.log(result);
};
notTheCs();


const nameAndIdThanks = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
  for (let i = 0; i < pokemons.length; i++) {
    console.log(`Number ${[i]} is ${pokemons[i]}`);
  };
};
nameAndIdThanks();

const catchPokemon = name => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
  pokemons.push(name);
  console.log(pokemons);
};
catchPokemon("SCYTHER");

const didICatchIt = name => {
  // check the pokemons to see if a specific pokemon is in the array
  return pokemons.includes(name);
};
console.log(didICatchIt("SCYTHER"));

const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.

  return pokemons.splice(2, 0, "Clefairy");
};
addInThirdPlace();
console.log(pokemons);

// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name
  let theLongestName = "";
  pokemons.forEach(element => {
    if (element.length > theLongestName.length) {
      theLongestName = element;
    }
  });
  console.log(theLongestName);
};
theLongestName();
