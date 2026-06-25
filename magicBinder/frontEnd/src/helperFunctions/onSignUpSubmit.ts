import { fetchSignUpResponse } from "../services/SignUpService";
import { useAuthStore } from "../stores/useAuthStore";

export const onSignUpSubmit = async (event:React.ChangeEvent<HTMLFormElement>, name: string, email: string, password: string) => {
  event.preventDefault();
  try {
    const response = await fetchSignUpResponse(name, email, password);
    useAuthStore.getState().setAccessToken(response.accessToken);
    useAuthStore.getState().setUserName(response.name);
    useAuthStore.getState().setUserEmail(response.email);
    console.log("fetched user token: " + response.success);
  } catch (error) {
    console.error("Login Failed: ", error)
    throw error;
  }
}