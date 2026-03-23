import React from "react";

export type Tasktype = {
  id: number;
  description: string;
  done: boolean;
  edit: boolean;
}

export type ContextTaskType = {
  tasks: Tasktype[];
  setTasks: React.Dispatch<React.SetStateAction<Tasktype[]>>
}

export type ContextDarkMode = {
  toggleDarkMode: boolean;
  setToggleDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}