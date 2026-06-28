import type { NavigateFunction } from "react-router-dom";
import { fetchSignUpResponse } from "../services/SignUpService";
import { useAuthStore } from "../stores/useAuthStore";



export const onSignUpSubmit = async (
  event:React.ChangeEvent<HTMLFormElement>, 
  name: string, 
  email: string, 
  password: string, 
  confirmPassword: string, 
  navigate: NavigateFunction, 
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>) => {

  event.preventDefault();

  if(password !== confirmPassword) {
    setErrorMessage("Passwords do not match");
    return
  }

  try {
    const response = await fetchSignUpResponse(name, email, password);
    useAuthStore.getState().setAccessToken(response.accessToken);
    useAuthStore.getState().setUserName(response.name);
    useAuthStore.getState().setUserEmail(response.email);
    navigate("/profilepage");
    console.log("fetched user token: " + response.success);
  } catch (error) {
    console.error("Login Failed: ", error)
    if(error instanceof Error){
      setErrorMessage(error.message);
    }
  }
}