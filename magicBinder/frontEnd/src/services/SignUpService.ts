const BASE_URL = `${import.meta.env.VITE_API_URL}`;

export const fetchSignUpResponse = async (name: string, email:string, password: string) => {
const options = {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: name,
    email: email,
    password: password
  })
}
 try {
  const response = await fetch(`${BASE_URL}/users/`, options);
  if(!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || `http error: ${response.status}`);
  }
  const jsonData = await response.json();
  return jsonData;
 } catch (error) {
  console.log("Error:" + error);
  throw error;
 }
}