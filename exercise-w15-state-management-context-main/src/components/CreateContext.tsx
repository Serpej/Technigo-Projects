import { createContext } from "react";

type ThemeContext = {
  theme: string;
  setTheme: (theme: string) => void;
}

export const Context = createContext<ThemeContext>({theme: "light", setTheme: () => {} });