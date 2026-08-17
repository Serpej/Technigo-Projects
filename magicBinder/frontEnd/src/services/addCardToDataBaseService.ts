import type { ScryfallCard } from "../types/cardTypes";

const BASE_URL = `${import.meta.env.VITE_API_URL}`;

export const addCardToDataBaseService = async (
  cardObject: ScryfallCard,
  accessToken: string
) => {

  const options = {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`
    },
    body: JSON.stringify(cardObject)
  }

  try {
    const response = await fetch(`${BASE_URL}/cards`, options);

    if(!response.ok) {
        const errorData = await response.json();

      if(!errorData.error) {
        throw new Error(`http error: ${response.status}`);
      }

      throw new Error(`${errorData.message} ${errorData.error}`);
    }

    const jsonData = await response.json();
    return jsonData;

  } catch (error) {
    console.log(error);
    throw error;
  }
}