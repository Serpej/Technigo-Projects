import React, { useState, useEffect } from "react"

type PokemonDetails = {
  sprites: {
    front_default: string;
  }
}

export const Details = ({name, url}: {name:string, url: string}) => {

  const [details, setDetails] = useState <PokemonDetails>();

  const fetchData = async (url: string) => {
    try {
      const response =  await fetch(url);
      if (!response.ok) {
        throw new Error(`Http error! Status: ${response.status}`)
      };
      const data = await response.json();
      setDetails(data);
      console.log("Here is the new data: ", data);

    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  } 

  useEffect(() => {
    fetchData(url);
  }, [url]);

  console.log("Here is the new details state: ", details);

  return (
    <div>
      <h1>{name}</h1>
      <img src={details?.sprites.front_default} alt="pokemon" />
    </div>
  )
}