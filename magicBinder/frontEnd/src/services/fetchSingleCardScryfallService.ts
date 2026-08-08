import type { ScryfallCard } from "../types/cardTypes";

export const fetchCard = async (cardIdQuery: string) => {
  try {
    const baseUrl = "https://api.scryfall.com";
    const response = await fetch(`${baseUrl}/cards/${cardIdQuery}`);
    if(!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }
    const result: Promise<ScryfallCard> = response.json();
    return result
  } catch (error) {
  
    if(!(error instanceof Error)) {
      return
    }
    console.error(error.message);
  } 
}