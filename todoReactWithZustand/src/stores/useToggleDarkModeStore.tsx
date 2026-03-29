import { create } from "zustand"
import type { DarkModeStoreType } from "../types/Types"

export const UseToggleDarkModeStore = create<DarkModeStoreType>((set) => ({
  toggleDarkMode: false,
  setToggleDarkMode: () => set((state) => ({toggleDarkMode: !state.toggleDarkMode}))
}));