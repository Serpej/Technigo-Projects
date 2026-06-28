import { fetchLoginResponse } from "../services/LoginService";
import { useAuthStore } from "../stores/useAuthStore";

export const onLoginSubmit = async (event:React.ChangeEvent<HTMLFormElement>, email: string, password: string, setErrorMessage: React.Dispatch<React.SetStateAction<string>>) => {
  event.preventDefault();
  try {
    const response = await fetchLoginResponse(email, password);
    useAuthStore.getState().setAccessToken(response.accessToken);
    useAuthStore.getState().setUserName(response.userName);
    useAuthStore.getState().setUserEmail(response.userEmail);
    console.log("fetched user token: " + response.success)
  } catch (error) {
    console.error("Login Failed: ", error)
    if(error instanceof Error){
      setErrorMessage(error.message);
    }
  }
}