import { create } from "zustand";
import { fetchBindersResponse } from "../services/fetchBinders";
import type { binderStoreType } from "../types/binderTypes";

export const useBinderStore = create<binderStoreType>((set) => ({ 
  binders: [],
  fetchBinders: async ( accessToken: string ) => {

    try {

      const fetchedBinders = await fetchBindersResponse(accessToken);


      if(!fetchedBinders || !fetchedBinders.success) {
        return
      }

      set({ binders:fetchedBinders.binderObjects });

    } catch (error) {
      if(!(error instanceof Error)) {
        return
      }
      console.error(error.message);
    }
  }
}))