import { useState, useEffect } from 'react'
import './App.css'
import { Details } from "./Details";

type Pokemon = {
  name: string;
  url: string;
}

type PokemonApiResults = {
  results: Pokemon[];
}

const App = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>();

  useEffect(() => {
    fetchData("https://pokeapi.co/api/v2/pokemon/")
  }, []);

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Http error, Status: ${response.status}`)
      };
      const data: PokemonApiResults = await response.json();
      setPokemons(data.results);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }
  const pokemonNameList = pokemons.map(pokemon => (
            <li key={pokemon.name}>
              <button onClick={() => setSelectedPokemon(pokemon)}>
                {pokemon.name}
              </button>
            </li>
          ))

  return (
    <div>
      <ul>
        {pokemonNameList}
      </ul>

      {selectedPokemon && <Details
      name={selectedPokemon.name} url={selectedPokemon.url} />}
    </div>
  )
}

export default App
