import type { NavigateFunction } from "react-router-dom";
import { deleteBinderResponse } from "../services/deleteBinderService";

export const handleDeleteBinder = async (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  binderName: string,
  accessToken: string,
  navigate: NavigateFunction,
) => {
  event.preventDefault();

  try {

    const response = await deleteBinderResponse(binderName, accessToken);

    navigate("/profilepage");

    console.log(response);
    
  } catch (error) {
    console.error("Failed To Add Binder: ", error)
  }

}