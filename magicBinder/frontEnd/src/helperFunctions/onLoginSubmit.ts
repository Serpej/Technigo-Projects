import type { NavigateFunction } from "react-router-dom";
import { fetchLoginResponse } from "../services/LoginService";
import { useAuthStore } from "../stores/useAuthStore";

export const onLoginSubmit = async (
  event:React.ChangeEvent<HTMLFormElement>, 
  email: string, 
  password: string,
  navigate: NavigateFunction,  
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  
  event.preventDefault();


  try {
    const response = await fetchLoginResponse(email, password);
    useAuthStore.getState().setAccessToken(response.accessToken);
    useAuthStore.getState().setUserName(response.name);
    useAuthStore.getState().setUserEmail(response.email);
    navigate("/profilepage");
    console.log("fetched user token: " + response.success)
  } catch (error) {
    console.error("Login Failed: ", error)
    if(error instanceof Error){
      setErrorMessage(error.message);
    }
  }
}