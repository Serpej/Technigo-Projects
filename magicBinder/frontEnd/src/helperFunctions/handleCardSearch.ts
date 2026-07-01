import type { NavigateFunction } from "react-router-dom";

export const handleCardSearch = (
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
  } catch (error) {
    console.error("Search failed: ", error)
    if(error instanceof Error){
      setErrorMessage(error.message);
    }
  }

}