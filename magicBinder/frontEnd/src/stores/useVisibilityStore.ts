import { create } from "zustand";
import type { UseVisibility } from "../types/useVisibilityTypes";

export const useVisibilityStore = create<UseVisibility>((set) => ({
  visibility: false,
  setVisibility: (visibility: boolean) => set({visibility: visibility}),
}));