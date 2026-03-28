import React from "react";
import { DateTime } from "luxon";

export type Tasktype = {
  description: string;
  done: boolean;
  edit: boolean;
  dateId: DateTime;
}

export type UseDescription = {
  newDescription: string,
  setNewDescription: (newDescription: string) => void,
}

export type UseInput = {
  inputValue: string,
  setInputValue: (inputValue: string) => void,
}

export type StoreTaskArrayType = {
  tasks: Tasktype[];
  addTask: (description:string, dateId:DateTime<true>) => void;
  deleteTask: (dateId:DateTime<true>) => void;
  toggleTask: (dateId:DateTime<true>) => void;
  editTaskBoolean: (dateId:DateTime<true>, boolean:boolean) => void;
  editTaskDescription: (dateId:DateTime<true>, newDescription:string) => void;
}


export type ContextDarkMode = {
  toggleDarkMode: boolean;
  setToggleDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}