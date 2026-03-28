import { create } from "zustand";
import type { UseDescription } from "../types/Types";

export const useDescriptionStateStore = create<UseDescription>((set) => ({
  newDescription: "",
  setNewDescription: (description:string) => set({newDescription: description})
}))