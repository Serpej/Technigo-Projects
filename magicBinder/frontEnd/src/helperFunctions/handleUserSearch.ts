import type { NavigateFunction } from "react-router-dom";

export const handleUserSearch = (
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
    navigate(`/userSearch?q=${query}`);
  } catch (error) {
    console.error("Search failed: ", error)
    if(error instanceof Error){
      setErrorMessage(error.message);
    }
  }

}