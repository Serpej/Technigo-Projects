import { create } from "zustand";
import type { UserAuth } from "../types/types";

export const useAuthStore = create<UserAuth>((set) => ({
  accessToken: "",
  setAccessToken: (newToken: string) => set({accessToken: newToken}),
  userName: "",
  setUserName: (newName: string) => set({userName: newName}),
  userEmail: "",
  setUserEmail: (newEmail: string) => set({userEmail: newEmail}),
  logOutUser: () => set({accessToken: "", userName: "", userEmail: ""})
}))