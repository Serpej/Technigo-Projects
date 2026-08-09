import type { cardBinderResponse } from "../types/binderTypes";

const BASE_URL=`${import.meta.env.local.VITE_API_URL}`;


export const fetchBinderCardSummaryService = async (
  binderName: string,
  accesstoken: string
) => {
  
  const options = {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization":`Bearer: ${accesstoken}`
    },
  }

  try {
    const response = await fetch(`${BASE_URL}/${binderName}`, options);
    
    if(!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `http error: ${response.status}`);
    }

    const binderCardSummaries: cardBinderResponse = await response.json();
    if(!binderCardSummaries.success) {
      return null
    }
    
    return binderCardSummaries

  } catch (error) {
    console.log("Error: " + error);
    throw error
  }
}