import { create } from "zustand"
import type {  StoreTaskArrayType } from "../types/Types"
import { DateTime } from "luxon"


export const UseTaskArrayStore = create<StoreTaskArrayType>( (set) => ({
   tasks:[],
   addTask: (description:string, dateId:DateTime<true>) => set((state) =>({
      tasks: [...state.tasks, {
         description,
         done: false,
         edit: false,
         dateId
      }]
   })),
   deleteTask: (dateId:DateTime<true>) => set((state) => ({
      tasks: state.tasks.filter((task) =>
         dateId !== task.dateId )
   })),
   toggleTask: (dateId:DateTime<true>) => set((state) => ({
      tasks: state.tasks.map((task) => 
         dateId === task.dateId ? { ...task, done: !task.done} : task
      )
   })),
   editTaskBoolean: (dateId:DateTime<true>, boolean:boolean = true) => set((state) => ({
      tasks: state.tasks.map((task) => 
         dateId === task.dateId ? {...task, edit:boolean} : task
      )
   })),
   editTaskDescription: (dateId:DateTime<true>, newDescription: string) => set((state) => ({
      tasks: state.tasks.map((task) => 
         dateId === task.dateId ? {...task, description: newDescription} : task
      )
   }))
}))