import { useAuthStore } from "../stores/useAuthStore";
import type { GetUserSearchResponse } from "../types/responses";

const BASE_URL = `${import.meta.env.VITE_API_URL}`;


export const fetchOtherUsers = async (
  query: string
) => {
  try {

    const accessToken = useAuthStore.getState().accessToken;

    const options = {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`
      }
    }

    const response  = await fetch(`${BASE_URL}/users/${query}`, options);

    if(!response.ok){
      throw new Error(`Response Status: ${response.status}`);
    };

    const result: GetUserSearchResponse = await response.json();

    return result;

  } catch (error) {

    if(!(error instanceof Error)) {
      throw new Error("Unknown error", { cause: error })
    };

    console.log(error.message);
    throw error;
  }
}