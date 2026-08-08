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
      throw new Error(errorData.message || `http error: ${response.status}`)
    }
    const result = await response.json();
    return result

  } catch (error) {
      console.log("Error: " + error);
      throw error;
  }

}