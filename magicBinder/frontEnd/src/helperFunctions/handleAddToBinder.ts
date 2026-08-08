import { fetchCardToBinderResponse } from "../services/addCardToBinderService";
import { fetchCard } from "../services/fetchSingleCardScryfallService";
import { addCardToDataBaseService } from "../services/addCardToDataBaseService";
import type { PostCardResponse } from "../types/responses"; 
export const handleAddToBinder = async  (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  binderName: string,
  cardId: string,
  condition: string,
  amount: number,
  accessToken: string,
) => {
  e.preventDefault();
  
  try {
    const cardResponse = await fetchCard(cardId);

    if (!cardResponse) {
      return null
    }

    const postCardResponse: PostCardResponse = await addCardToDataBaseService(cardResponse, accessToken);
    const response = await fetchCardToBinderResponse(binderName ,postCardResponse._id, condition, amount, accessToken);

    if(!response) {
      return
    }

    console.log(response);

  } catch(error) {
    console.error("Failed To Add Card: ", error)
  }

}