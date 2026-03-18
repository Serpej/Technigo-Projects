import { createContext } from "react";
import type { ContextTaskType } from "../types/Types";




export const TaskArrayContext = createContext<ContextTaskType>({ tasks:[], setTasks: () => {}});

