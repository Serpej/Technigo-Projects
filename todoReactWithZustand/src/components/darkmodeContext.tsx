import { createContext } from "react"
import type { ContextDarkMode } from "../types/Types";

export const DarkModeContext = createContext<ContextDarkMode>({toggleDarkMode: false, setToggleDarkMode: () => {}});