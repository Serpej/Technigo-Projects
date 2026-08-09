import { fetchBinderCardSummaryService } from "../services/fetchBinderCardSummaryService";
import { fetchCard } from "../services//fetchSingleCardScryfallService"

export const handleFetchBinderCards = async (
  binderName: string,
  accesstoken: string
) => {
    const cardSummariesFromBinder = await fetchBinderCardSummaryService(binderName, accesstoken);

    if(!cardSummariesFromBinder) {
      return null
    }

    const fullCardArray = await Promise.all(cardSummariesFromBinder.binder.cards.map(async card => {
      const fetchedScryfallCardObject = await fetchCard(card.cardId);
      
      if(!fetchedScryfallCardObject) {
        return null
      }

      
    }))
    return fullCardArray

}