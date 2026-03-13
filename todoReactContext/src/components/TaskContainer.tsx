import type { Tasktype } from "../types/Types";
import { NewTaskForm } from "./NewtaskForm";
import { Task } from "./Task";
import { TaskCount } from "./TaskCount";

export const TaskContainer = () => {


  const tasks:Tasktype[] = [
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
  ];

  const taskList = tasks.map((task, index) => {
    return (
      <li key={index}>
        <Task
          description= {task.description}
          done= {task.done}
         />
      </li>
    )
  })

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <TaskCount />
      <NewTaskForm />
      <ul>
        {taskList}
      </ul>
    </div>
  )
}