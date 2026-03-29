import { create } from "zustand"
import type { editBooleanStoreType } from "../types/Types"

export const UseEditBooleanStore = create<editBooleanStoreType>((set) => ({
  editBoolean: false,
  setEditBoolean: () => set((state) => ({editBoolean: !state.editBoolean}))
})) 