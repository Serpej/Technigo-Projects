const BASE_URL = `${import.meta.env.VITE_API_URL}`;
export const fetchLoginResponse = async (email:string, password: string) => {

const options = {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    email: email,
    password: password
  })
}
 try {
  const response = await fetch(`${BASE_URL}/users/login`, options);
  if(!response.ok) {
    throw new Error(`http error: ${response.status}`);
  }
  const jsonData = await response.json();
  return jsonData;
 } catch (error) {
  console.log("Error:" + error);
  throw error;
 }
}