import { create } from "zustand";
import { fetchBindersResponse } from "../services/fetchBinders";
import type { binderStoreType, cardBinderSummary } from "../types/binderTypes";

export const useBinderStore = create<binderStoreType>((set) => ({ 
  binders: [],
  fetchBinders: async ( accessToken: string ) => {

    try {

      const fetchedBinders = await fetchBindersResponse(accessToken);


      if(!fetchedBinders || !fetchedBinders.success) {
        return false
      }

      set({ binders:fetchedBinders.binderObjects });

      return true

    } catch (error) {
      if(!(error instanceof Error)) {
        return
      }
      console.error(error.message);
    }
  },
  addBinder: (binder: cardBinderSummary) => {
    set((state) => ({ binders: [...state.binders, binder] }));
  }
}))