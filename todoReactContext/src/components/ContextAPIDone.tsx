import { createContext } from "react";

export type DoneValueType = {
  taskDone: boolean;
  setTaskDone: React.Dispatch<React.SetStateAction<boolean>>;
}

export const taskDoneValue = createContext<DoneValueType>({ taskDone: false, setTaskDone: () => {}});