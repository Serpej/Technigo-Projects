import type { cardBinderResponse } from "../types/binderTypes";

const BASE_URL = `${import.meta.env.VITE_API_URL}`;

export const fetchOtherUsersBinderCards = async (
  accessToken: string,
  otherUsersId: string,
  otherUsersBinderId: string,
):Promise<cardBinderResponse | null> => {
  
  const options = {
    method: "GET",
    headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": `Bearer ${accessToken}`
    },
  }
  
  try {

    const response = await fetch(`${BASE_URL}/binders/otherUsers/${otherUsersId}/${otherUsersBinderId}`, options);

    if(!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `http error: ${response.status}`);
    }

    const result: cardBinderResponse = await response.json();

    if(!result.success) {
      return null
    }

    return result

  } catch (error) {
    console.error(error);
    throw error
  }
}