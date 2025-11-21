import type {ScryfallListResponse, ScryfallCard} from "../interfaces/interfaces";

export async function getScryfallFetch(query: string): Promise<ScryfallListResponse> {
  const url =`https://api.scryfall.com/cards/search?q=${encodeURIComponent(query)}`;
  const response = await fetch(url);
  let result = await response.json();
  if(!response.ok) {
    throw new Error(`Scryfall error ${response.status}`);
  }
  return result;
};