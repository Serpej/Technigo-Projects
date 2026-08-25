import { deleteCardFromBinderResponse } from "../services/deleteCardFromBinderService";
import { useBinderCardsStore } from "../stores/useBinderCardsStore";

export const handleDeleteCardFromBinder = async (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  binderName: string,
  cardId: string,
  accessToken: string,
) => {

  e.preventDefault();

  try {

    const response = await deleteCardFromBinderResponse(binderName, cardId, accessToken);

    if(!response) {
      return null;
    }

    console.log(response);
    useBinderCardsStore.getState().removeCard(cardId);
    return response.message;

  } catch (error) {

    console.error("Failed To Delete Card: ", error);

    if(error instanceof Error) {
      return `Failed To Delete Card: ${error.message}`;
    }

    return "Failed To Delete Card";
  }
}