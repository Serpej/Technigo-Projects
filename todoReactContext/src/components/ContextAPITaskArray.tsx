import { createContext } from "react";
import type { ContextTaskType, ContextInputValue } from "../types/Types";




export const TaskArrayContext = createContext<ContextTaskType>({ tasks:[], setTasks: () => {}});

export const InputValue = createContext<ContextInputValue>({inputValue: "", setInputValue: () => {}})