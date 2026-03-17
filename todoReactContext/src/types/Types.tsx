import React from "react";

export type Tasktype = {
  description: string;
  done: boolean;
}

export type ContextTaskType = {
  tasks: Tasktype[];
  setTasks: React.Dispatch<React.SetStateAction<Tasktype[]>>
}

export type ContextInputValue = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}