import { create } from "zustand";
import type { userToken } from "../types/types";

export const useAuthStore = create<userToken>((set) => ({
  accessToken:"",
  setAccessToken: (newToken: string) => set({accessToken: newToken})
}))