import { createContext } from "react";
import type { ContextType } from "../types/Types";




export const TaskArrayContext = createContext<ContextType>({ tasks:[], setTasks: () => {}});