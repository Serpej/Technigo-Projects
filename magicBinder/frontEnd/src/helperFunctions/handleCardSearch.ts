import { fetchScryfallResponse } from "../services/ScryfallService";
import type { NavigateFunction } from "react-router-dom";

export const handleCardSearch = async (
  event:React.ChangeEvent<HTMLFormElement>,
  query: string,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
  navigate: NavigateFunction
) => {

  event.preventDefault();

  try {
    if(!query) {
      return;
    }
    navigate(`/search?q=${query}`);
    const response = await fetchScryfallResponse();
  } catch (error) {
    console.error("Search failed: ", error)
    if(error instanceof Error){
      setErrorMessage(error.message);
    }
  }

}