const BASE_URL = `${import.meta.env.VITE_API_URL}`;

export const createBinderService = async (
  binderName: string,
  userId: string
) => {

  const options = {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      binderName: binderName,
      userId: userId,
    })
  }
  try {
    const response = await fetch(`${BASE_URL}/binders/`, options);
    if(!response.ok) {
      const errorData = await response.json(); 
      throw new Error(errorData.message || `http error: ${response.status}`);
    }
    const jsonData = await response.json();
    return jsonData;

  } catch(error) {
    console.log("Error: " + error);
    throw error
  }
}