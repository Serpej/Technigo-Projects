import { fetchLoginResponse } from "../services/Loginservice";
import { useAuthStore } from "../stores/useAuthStore";

export const onLoginSubmit = async (event:React.ChangeEvent<HTMLFormElement>, email: string, password: string) => {
  event.preventDefault();
  try {
    const response = await fetchLoginResponse(email, password);
    useAuthStore.getState().setAccessToken(response.accessToken);
    console.log("fetched user token: " + response.success)
  } catch (error) {
    console.error("Login Failed: ", error)
    throw error;
  }
}