import { fetchBinderCardSummaryService } from "../services/fetchBinderCardSummaryService";
import type { FullUserCard } from "../types/cardTypes";

export const handleFetchBinderCards = async (
  binderName: string,
  accesstoken: string
): Promise<FullUserCard[] | null> => {

    const cardSummariesFromBinder = await fetchBinderCardSummaryService(binderName, accesstoken);

    if(!cardSummariesFromBinder) {
      return null
    }

    const fullCardArray = cardSummariesFromBinder.binder.cards.map( card => {

      const { cardId: cardObject, condition, amount } = card
    
      
      const userCard: FullUserCard = ({...cardObject, condition: condition, amount: amount});

      return userCard
    });

    const filteredCardArray = fullCardArray.filter((card): card is FullUserCard => card !== null);
    
    return filteredCardArray

}