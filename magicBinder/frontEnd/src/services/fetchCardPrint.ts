export const fetchCardPrint = async (prints_search_uri: string) => {
  try {
    const response = await fetch(prints_search_uri);
    if(!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }
    const result = response.json();
    return result
  } catch (error) {
    if(!(error instanceof Error)) {
      return
    }
    console.error(error.message);
  } 
}