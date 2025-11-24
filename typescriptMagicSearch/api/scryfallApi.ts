import type {ScryfallListResponse, SearchOptions} from "../interfaces/interfaces";

export async function getScryfallFetch(searchOptions: SearchOptions): Promise<ScryfallListResponse> {
  const url = new URL(`https://api.scryfall.com/cards/search`);

  //Array for all querys
  const queryParts: string[] = [];

  //Name
  if (searchOptions.name) {
    queryParts.push(`${searchOptions.name}`)
  }

  //Oracle Text
  if (searchOptions.oracle_text) {
    queryParts.push(`o:"${searchOptions.oracle_text}"`)
  }

  //Type
  if (searchOptions.type_line) {
    queryParts.push(`t:${searchOptions.type_line}`)
  }

  //Mana value
  if (searchOptions.cmc && searchOptions.cmc_criteria) {
    queryParts.push(`mv${searchOptions.cmc_criteria}${searchOptions.cmc}`)
  }

  const query = queryParts.join(" ");
  url.searchParams.set("q", query);
  
  console.log(url.toString());

  const response = await fetch(url);
  let result = await response.json();
  if(!response.ok) {
    throw new Error(`Scryfall error ${response.status}`);
  }
  return result;
};