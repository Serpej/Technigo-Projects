import React from "react";
import { DateTime } from "luxon";

export type Tasktype = {
  id: number;
  description: string;
  done: boolean;
  edit: boolean;
  dateId: DateTime;
}

export type ContextTaskType = {
  tasks: Tasktype[];
  setTasks: React.Dispatch<React.SetStateAction<Tasktype[]>>
}

export type ContextDarkMode = {
  toggleDarkMode: boolean;
  setToggleDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}