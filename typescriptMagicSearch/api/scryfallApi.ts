import type {ScryfallListResponse, SearchOptions} from "../interfaces/interfaces";

export async function getScryfallFetch(searchOptions: SearchOptions): Promise<ScryfallListResponse> {
  const url = new URL(`https://api.scryfall.com/cards/search?q=`);

  //Array for all querys
  const queryParts: string[] = [];

  if (searchOptions.name) {
    queryParts.push(`${searchOptions.name}`)
  }
  if (searchOptions.oracle_text) {
    queryParts.push(`o:${searchOptions.oracle_text}`)
  }
  if (searchOptions.type_line) {
    queryParts.push(`t:${searchOptions.type_line}`)
  }

  const query = queryParts.join(" ");
  url.searchParams.set("q", query);

  console.log(url.searchParams);

  const response = await fetch(url);
  let result = await response.json();
  if(!response.ok) {
    throw new Error(`Scryfall error ${response.status}`);
  }
  return result;
};