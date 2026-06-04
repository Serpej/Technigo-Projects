import { fetchLoginResponse } from "../services/Loginservice";

export const onLoginSubmit = async (event:React.ChangeEvent<HTMLFormElement>, email: string, password: string) => {
  event.preventDefault();
  await fetchLoginResponse(email, password);
  //fortsätt här
}