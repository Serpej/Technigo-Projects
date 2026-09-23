import { useAuthStore } from "../stores/useAuthStore";
import type { OtherUsersCards } from "../types/responses";

const BASE_URL = `${import.meta.env.VITE_API_URL}`

export const fetchOtherUsersCards = async (
  cardName: string
) => {
  try {

    const accesstoken = useAuthStore.getState().accessToken;

    const options = {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization":`Bearer ${accesstoken}`
      }
    };

    const result = await fetch(`${BASE_URL}/binders/otherUsers/cards/${cardName}`, options);

    if (!result.ok) {

      const errorData = await result.json();
    
      throw new Error(errorData.message || `http error: ${errorData.status}` )
    };

    const fetchObject: Promise<OtherUsersCards>[] = await result.json();

    return fetchObject

  } catch (error) {

    if(!(error instanceof Error)) {
      return
    }

    console.error(error.message);
  }
}