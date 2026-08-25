import { create } from "zustand";
import { handleFetchBinderCards } from "../helperFunctions/handleFetchBinderCards"
import type { CardsStoreType, FullUserCard } from "../types/cardTypes";

export const useBinderCardsStore = create<CardsStoreType>((set) => ({ 
  cards: [],
  fetchCards: async (binderName, accessToken) => {

    try {

      const fetchedCards = await handleFetchBinderCards(binderName, accessToken);

      if(!fetchedCards) {
        return false
      }

      set({ cards: fetchedCards });
      return true
    } catch (error) {
      if(!(error instanceof Error)) {
        return
      }
      console.error(error.message);
    }
  },
  removeCard: (cardId: string) => {
    set((state) => ({ cards: state.cards.filter((card: FullUserCard) => card._id !== cardId) }))
  }
}))