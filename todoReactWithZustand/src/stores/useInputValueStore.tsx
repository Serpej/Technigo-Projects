import { create } from "zustand";
import type { UseInput } from "../types/Types";

export const useInputValueStore = create<UseInput>((set) => ({
  inputValue: "",
  setInputValue: (inputValue:string) => set({inputValue: inputValue})
}))