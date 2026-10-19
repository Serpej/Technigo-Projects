import type { NavigateFunction } from "react-router-dom";
import type { GetUserSearchResponse } from "../types/responses";
import { fetchOtherUsers } from "../services/fetchOtherUsersService";


export const handleUserSearch = async (
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

    const searchResult: GetUserSearchResponse | undefined = await fetchOtherUsers(query);

    if(!searchResult) {
      throw new Error("Search failed: Search results undefined");
    };

    const options = {
      state: searchResult
    };

    navigate(`/userSearch?q=${query}`, options);

  } catch (error) {

    console.error("Search failed: ", error);

    if(error instanceof Error){

      setErrorMessage(error.message);

    }
  }

}