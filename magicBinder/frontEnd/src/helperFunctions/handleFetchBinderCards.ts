import { fetchBinderCardSummaryService } from "../services/fetchBinderCardSummaryService";
import type { FullUserCard, PopulatedScryfallCard } from "../types/cardTypes";


const isKnownCardType = (card: PopulatedScryfallCard): card is PopulatedScryfallCard => {
  switch (card.__t) {
    case "SingleFacedCard":
    case "DoubleFacedCard":
    case "SplitFacedCard":
    case "ReversibleCard":
      return true;        
    default:
      return false; 
  }
};


export const handleFetchBinderCards = async (
  binderId: string,
  accesstoken: string
): Promise<{ binderName: string, filteredCardArray: FullUserCard[] } | null> => {

    const cardSummariesFromBinder = await fetchBinderCardSummaryService(binderId, accesstoken);

    if(!cardSummariesFromBinder) {
      return null;
    }

    const binderName = cardSummariesFromBinder.binderName;
    const fullCardArray = cardSummariesFromBinder.binder.cards.map( card => {

      const {cardId: populatedCard, condition, amount } = card


      if(!isKnownCardType(populatedCard)){
        return null;
      }
      
      const userCard: FullUserCard = {...populatedCard, condition, amount};
      return userCard
    });

    const filteredCardArray = fullCardArray.filter((card): card is FullUserCard => card !== null);
    
    return { binderName, filteredCardArray }

}