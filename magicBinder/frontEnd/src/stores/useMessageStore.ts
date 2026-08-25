import { create } from "zustand";
import type { UseMessage } from "../types/messageTypes";

export const useMessageStore = create<UseMessage>((set) => ({
  message: "",
  setMessage: (newMessage: string) => set({message: newMessage}),
}))