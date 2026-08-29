import type { DeleteBinder } from "../types/responses";

const BASE_URL = `${import.meta.env.VITE_API_URL}`;

export const deleteBinderResponse = async (
  binderName: string,
  accessToken: string
) => {

  const options = {
    method: "DELETE",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`
    },
    body: JSON.stringify({
      binderName: binderName,
    })
  }

  try {
    const response = await fetch(`${BASE_URL}/binders/${binderName}`, options);

    if(!response.ok) {
      const errorData = await response.json();
      
      if(!errorData.error) {
        throw new Error(`http error: ${response.status}`);
      }

      throw new Error(`${errorData.message} ${errorData.error}`);
    }
    const result: DeleteBinder = await response.json();
    
    return result

  } catch (error) {
      console.log(error);
      throw error;
  }

}