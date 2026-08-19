import { deleteCardFromBinderResponse } from "../services/deleteCardFromBinderService";

export const handleDeleteCardFromBinder = async (
  binderName: string,
  cardId: string,
  accessToken: string
) => {

try {

  const response = await deleteCardFromBinderResponse(binderName, cardId, accessToken);

  if(!response) {
    return null;
  }

  console.log(response);

  return response.message;

} catch (error) {

  console.error("Failed To Delete Card: ", error);

  if(error instanceof Error) {
    return `Failed To Delete Card: ${error.message}`;
  }

  return "Failed To Delete Card";
}

}