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
        throw new Error(errorData.message || `http error: ${response.status}`);
    }

    const jsonData = await response.json();
    return jsonData;

  } catch (error) {
    console.log("Error: " + error);
    throw error;
  }
}