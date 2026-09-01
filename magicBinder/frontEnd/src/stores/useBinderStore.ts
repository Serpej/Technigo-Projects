import { create } from "zustand";
import { fetchBindersResponse } from "../services/fetchBinders";
import type { binderStoreType, cardBinderSummary } from "../types/binderTypes";
import { updateBinderServiceResponse } from "../services/updateBinderService";

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
  },
  binderImage: "",
  setBinderImage: (newBinderImage: string) => set({ binderImage: newBinderImage }),
  updateBinderImage: async (
    binderName: string, 
    accessToken: string, 
    newBinderImage: string,
    setMessage: (newMessage: string) => void,
  ) => {
    try {
      const response = await updateBinderServiceResponse(binderName, accessToken, newBinderImage);

      if(!response) {
        return
      }

      setMessage("Binder Image Changed.");
    } catch (error) {

      if(!(error instanceof Error)) {
        return
      }
      console.error(error.message);
      setMessage("Could not Change Binder Image.");
    }
  }
}))