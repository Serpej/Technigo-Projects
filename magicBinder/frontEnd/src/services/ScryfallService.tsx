export const fetchScryfallResponse = async (query: string) => {
  const baseUrl = "https://api.scryfall.com";
  try {
    const response = await fetch(`${baseUrl}/cards/search?q=${query}`);
    if(!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }
    const result = await response.json();
    return result
  } catch (error) {
    if(!(error instanceof Error)) {
      return;
    }
    console.error(error.message);
  }
}