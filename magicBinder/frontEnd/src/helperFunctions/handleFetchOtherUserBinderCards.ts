import { fetchOtherUsersBinderCards } from "../services/fetchOtherUsersBinderCards";
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

export const handleFetchOtherUserBinderCards = async (
  accessToken: string,
  otherUsersId: string,
  binderId: string,
 ): Promise<{ binderName: string, cardArray: FullUserCard[] } | null> => {
  
  try {

    const cardSummariesFromBinder = await fetchOtherUsersBinderCards(
      accessToken,
      otherUsersId,
      binderId,
    );

    if(!cardSummariesFromBinder) {
      return null
    }

    const fullCardArray = cardSummariesFromBinder.binder.cards.map(
      card => {

        const { cardId: populatedCard, condition, amount } = card
        
        if(!isKnownCardType(populatedCard)){
          return null;
        }

        const userCard: FullUserCard = {...populatedCard, condition, amount };
        return userCard
      });

    const binderName = cardSummariesFromBinder.binderName;

    const cardArray = fullCardArray.filter((card): card is FullUserCard => card !== null);

    return { binderName, cardArray };

  } catch (error) {
    console.error(error);
    throw error;
  }
}