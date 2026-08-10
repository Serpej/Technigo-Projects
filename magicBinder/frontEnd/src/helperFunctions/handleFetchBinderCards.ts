import { fetchBinderCardSummaryService } from "../services/fetchBinderCardSummaryService";
import { fetchCard } from "../services//fetchSingleCardScryfallService"
import type { FullUserCard } from "../types/cardTypes";

export const handleFetchBinderCards = async (
  binderName: string,
  accesstoken: string
): Promise<FullUserCard[] | null> => {

    const cardSummariesFromBinder = await fetchBinderCardSummaryService(binderName, accesstoken);

    if(!cardSummariesFromBinder) {
      return null
    }

    const fullCardArray = await Promise.all(cardSummariesFromBinder.binder.cards.map(async card => {

      const { cardId, condition, amount } = card
      const fetchedScryfallCardObject = await fetchCard(card.cardId);
      
      if(!fetchedScryfallCardObject) {
        return null
      }
      
      const userCard: FullUserCard = ({...fetchedScryfallCardObject, cardId: cardId, condition: condition, amount: amount});

      return userCard
    }));

    const filteredCardArray = fullCardArray.filter((card): card is FullUserCard => card !== null);
    
    return filteredCardArray

}