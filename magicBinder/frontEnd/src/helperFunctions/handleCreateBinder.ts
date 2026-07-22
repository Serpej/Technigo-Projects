import type { NavigateFunction } from "react-router-dom";
import type { BinderNameState } from "../types/binderTypes";

export const handleCreateBinder = async (
  event:React.ChangeEvent<HTMLFormElement>,
  binderName: string,
  userId: string,
  navigate: NavigateFunction,
  locationState: BinderNameState
) => {
event.preventDefault();

  try {
    const response = await createBinderService(binderName, userId);
    navigate("/binder", { state: locationState });
  } catch (error) {
    console.error("Failed To Add Binder: ", error)
  }

}