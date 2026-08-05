import { fetchAddCardToBinderResponse } from "../services/addCardToBinderService";
import { fetchCard } from "../services/fetchSingleCardScryfallService";
import { addCardToDataBaseService } from "../services/addCardToDataBaseService";
import type { ScryfallCard } from "../types/cardTypes";
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
    const cardResponse: ScryfallCard = await fetchCard(cardId);
    const dataBaseCard = await addCardToDataBaseService(cardResponse, accessToken);
    const response = await fetchAddCardToBinderResponse(binderName ,dataBaseCard._id, condition, amount, accessToken);

  } catch(error) {
    console.error("Failed To Add Card: ", error)
  }

}