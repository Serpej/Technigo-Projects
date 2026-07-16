import type { 
  ScryfallSearchResult, 
  ScryFallSearchResponse, 
  ScryfallSearchSuccess,
  ScryfallSearchEmpty
} from "../types/types";

export const fetchScryfallResponse = async (query: string):Promise<ScryfallSearchResult | undefined>  => {
  const baseUrl = "https://api.scryfall.com";
  try {
    const response = await fetch(`${baseUrl}/cards/search?q=${query}`);

    if(response.status === 404) {
      return {found: false, message: "No cards found"}
    }

    if(!response.ok) {
      const errorData: ScryfallSearchEmpty = await response.json();
      throw new Error(errorData.message || `Response Status: ${response.status}`);
    }

    const result: ScryFallSearchResponse = await response.json();
    const successfullResult: ScryfallSearchSuccess = {...result, found: true} 

    return successfullResult

  } catch (error) {
    if(!(error instanceof Error)) {
      return;
    }
    console.error(error.message);
  }
}