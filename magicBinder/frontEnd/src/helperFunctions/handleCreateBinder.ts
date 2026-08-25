import type { NavigateFunction } from "react-router-dom";
import type { BinderNameState } from "../types/binderTypes";
import { createBinderService } from "../services/createBinderService";
import { useBinderStore } from "../stores/useBinderStore";

export const handleCreateBinder = async (
  event:React.ChangeEvent<HTMLFormElement>,
  binderName: string,
  userId: string,
  accessToken: string,
  navigate: NavigateFunction,
) => {
  event.preventDefault();

  try {

    const response = await createBinderService(binderName, userId, accessToken);
    useBinderStore.getState().addBinder({ name: binderName , _id: response.binderId })
    const binderNameState: BinderNameState = {
      "binderName": binderName,
      "binderId": response.binderId
    }

    const locationState: BinderNameState =  binderNameState; 
    navigate("/profilepage", { state: locationState });
    console.log(response);
  } catch (error) {
    console.error("Failed To Add Binder: ", error)
  }

}