// To continue on with the pokemon theme, we've found a
// pokemon API for you to practice on --> https://pokeapi.co/.
// If you go to this page --> https://pokeapi.co/api/v2/,
// you can see all of the endpoints available.
// We will start with the endpoint named pokemon.

// The goal is to change the content of our mystery table in
// HTML to contain info about one specific pokemon. To get you
// started, we've created some variables for you to use later on:

const image = document.getElementById("image");
const pokeName = document.getElementById("name");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");

pokeName.innerHTML = "";
weight.innerHTML = "";
height.innerHTML = "";
types.innerHTML = "";



/* const fetchPokemons = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data =  await response.json()
    let pokemonArray = Array.from(data.results);    
    console.log(pokemonArray[103]);
    
  } catch(error) {
    console.log("Error occured!", error);
  }
}; */

//fetchPokemons();

const fetchCuboneData = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/104/");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    };
    const data = await response.json();
    const cuboneTypes = Array.from(data.types);

    image.src = data.sprites.front_default;
    
    const pokemonName =  document.createElement("span");
    const pokemonWeight =  document.createElement("span");
    const pokemonType =  document.createElement("span");
    const pokemonHeight =  document.createElement("span");

    pokemonName.textContent = data.name;
    pokemonWeight.textContent = data.weight;
    pokemonType.textContent = cuboneTypes[0].type.name;
    pokemonHeight.textContent = data.height;


    pokeName.appendChild(pokemonName);
    weight.appendChild(pokemonWeight);
    types.appendChild(pokemonType);
    height.appendChild(pokemonHeight);

    
  } catch (error) {
    console.log("Error occured!", error);
  }
};
fetchCuboneData();

// ***BONUS***
// Check out the API's documentation and try to fetch from another
// endpoint! There are many - as you can see in the first link


// Min tanke här är att fetcha alla pokemons med fetchPokemon. Sen finns det en URL i alla pokemon objects
// som jag vill fetcha med get id och loopa över alla pokemons för att hämta id.

const getId = (pokemonURL) => {
  const fetchIds = async () => {
    try {
      const response  = await fetch(pokemonURL);
      if (!response.ok) {
        throw new Error(`Error! Status ${response.status}`);
      };
      const json = await response.json();
      const pokemon = json;
        console.log(`${pokemon.name} has the id number ${pokemon.id}.`)
    } catch (error) {
      console.log(`Error occured`, error);
    };
  };
  fetchIds();
};

const fetchPokemons = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data =  await response.json()
    let pokemonArray = Array.from(data.results);    
    pokemonArray.forEach( (pokemon) => {
        getId(pokemon.url);
    });
  } catch(error) {
    console.log("Error occured!", error);
  }
};
fetchPokemons()

const fetchEvoluton = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/evolution-chain/102")
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data =  await response.json()
    console.log(data);
  } catch(error) {
    console.log("Error occured!", error);
  }
};

fetchEvoluton()