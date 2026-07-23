import type { NavigateFunction, Location } from "react-router-dom";
import type { BinderNameState } from "../types/binderTypes";
import { createBinderService } from "../services/createBinderService";

export const handleCreateBinder = async (
  event:React.ChangeEvent<HTMLFormElement>,
  binderName: string,
  userId: string,
  navigate: NavigateFunction,
  location: Location
) => {
  event.preventDefault();

  try {

    const response = await createBinderService(binderName, userId);
    const jsonData = await response.json();
    const binderNameState: BinderNameState = {
      "binderName": binderName,
      "binderId": jsonData.binderId
    }

    const locationState: BinderNameState = {...location.state, ...binderNameState} 
    navigate("/binder", { state: locationState });
    console.log(jsonData);
  } catch (error) {
    console.error("Failed To Add Binder: ", error)
  }

}