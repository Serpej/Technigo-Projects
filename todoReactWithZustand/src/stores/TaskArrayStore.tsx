import { create } from "zustand"
import type {  StoreTaskArrayType, Tasktype } from "../types/Types"
import { DateTime } from "luxon"


export const UseTaskArrayStore = create<StoreTaskArrayType>( (set) => ({
   tasks:[], 
   setTasks: (tasks:Tasktype[] ) => set({ tasks }),
   addTask: (description:string, dateId:DateTime<true>) => set((state) =>({
      tasks: [...state.tasks, {
         description,
         done: false,
         edit: false,
         dateId
      }]
   })),
   deleteTask: (index:number) => set((state) => ({
      tasks: state.tasks.filter((_,i:number) =>
         index === i)
   })),
   

}))