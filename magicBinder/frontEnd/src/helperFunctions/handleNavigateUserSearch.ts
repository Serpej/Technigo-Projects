import type { NavigateFunction } from "react-router-dom";


export const handleNavigateUserSearch = async (
  event:React.ChangeEvent<HTMLFormElement>,
  query: string,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
  navigate: NavigateFunction
) => {

  event.preventDefault();

  try {

    if(!query) {
      return;
    };

    const options = {
      state: query
    };

    navigate(`/userSearch?q=${query}`, options);

  } catch (error) {

    console.error("Search failed: ", error);

    if(error instanceof Error){

      setErrorMessage(error.message);

    }
  }

}