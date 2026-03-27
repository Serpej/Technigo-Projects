import React from "react";
import { DateTime } from "luxon";

export type Tasktype = {
  description: string;
  done: boolean;
  edit: boolean;
  dateId: DateTime;
}

export type ContextTaskType = {
  tasks: Tasktype[];
  setTasks: React.Dispatch<React.SetStateAction<Tasktype[]>>
}

export type StoreTaskArrayType = {
  tasks: Tasktype[];
  setTasks: (tasks: Tasktype[]) => void;
  addTask: (description:string, dateId:DateTime<true>) => void;
  deleteTask: (index:number) => void;
}


export type ContextDarkMode = {
  toggleDarkMode: boolean;
  setToggleDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}