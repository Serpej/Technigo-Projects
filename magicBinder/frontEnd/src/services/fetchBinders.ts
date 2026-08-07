import type {cardBinderResult, cardBinderSearchSuccessfull, cardBinderSearchEmpty } from "../types/binderTypes";
const BASE_URL = `${import.meta.env.VITE_API_URL}`;

export const fetchBindersResponse = async (accessToken: string):Promise<cardBinderResult | undefined> => {
  
  const options = {
    method: "GET",
    headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": `Bearer ${accessToken}`
    },
  }
  
  try {

    const response = await fetch(`${BASE_URL}/binders/`, options);

    if(!response.ok) {
      const errorData: cardBinderSearchEmpty = await response.json();
      throw new Error(errorData.message || `http error: ${response.status}`);
    }

    const result:cardBinderSearchSuccessfull = await response.json();

    return result

  } catch (error) {
    if(!(error instanceof Error)) {
      return
    }
    console.error(error.message);
  }
}