import { useState } from "react";
import type { Tasktype } from "../types/Types";
import { NewTaskForm } from "./NewtaskForm";
import { Task } from "./Task";
import { TaskCount } from "./TaskCount";

export const TaskContainer = () => {
  const [tasks, setTasks] =useState<Tasktype[]>([
    {
      description: "Drink Water",
      done: false,
    },
    {
      description: "Clean Room",
      done: false,
    },
    {
      description: "Play Magic",
      done: false,
    }
  ]);


  const toggleTask = (index:number) => {
    setTasks(tasks.map((task, i) => 
      i === index ? { ...task, done: !task.done} : task
    ));
  };

  const taskList = tasks.map((task, index) => {
    return (
      <li key={index}>
        <Task
          description= {task.description}
          taskObjectDone= {task.done}
          toggleTask= {() => {toggleTask(index)}}
         />
      </li>
    )
  })

  return (
    <div className="bg-background min-h-screen flex flex-col justify-center items-center">
      <TaskCount />
      <NewTaskForm />
      <ul>
        {taskList}
      </ul>
    </div>
  )
}