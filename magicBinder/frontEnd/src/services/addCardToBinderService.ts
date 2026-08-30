import type { AddCardToBinder } from "../types/responses";

const BASE_URL = `${import.meta.env.VITE_API_URL}`;


export const fetchCardToBinderResponse = async (
  binderName: string,
  cardId: string,
  condition: string,
  amount: number,
  accessToken: string
) => {

  const options = {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`
    },
    body: JSON.stringify({
      _id: cardId,
      condition: condition,
      amount: amount
    })
  }

  try {
    const response = await fetch(`${BASE_URL}/binders/${binderName}/cards`, options);

    if(!response.ok) {
      const errorData = await response.json();
      
      if(!errorData.error) {
        throw new Error(`http error: ${response.status}`);
      }

      throw new Error(`${errorData.message} ${errorData.error}`);
    }
    
    const result: AddCardToBinder = await response.json();
    return result

  } catch (error) {
      console.log(error);
      throw error;
  }

}