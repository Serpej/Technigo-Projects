import React from "react";

export type Tasktype = {
  description: string;
  done: boolean;
}

export type ContextType = {
  tasks: Tasktype[] ;
  setTasks: React.Dispatch<React.SetStateAction<Tasktype[]>>
}